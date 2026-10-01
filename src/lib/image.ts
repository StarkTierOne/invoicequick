// Client-only image helpers for the /create logo upload.
//
// Why this exists as its own module rather than inline in the page: the
// resize happens off a <canvas>, which only exists in the browser, and we
// want the size ceiling enforced in one place rather than re-checked at every
// call site. The function is never called during a server render — only from
// a file-input change handler — so referencing `Image`/`document` here is
// safe even though this file is also pulled into the server bundle's type
// graph.

/** Anything the logo picker will accept without complaint. */
export function isSupportedImageFile(file: File): boolean {
  return file.type.startsWith("image/");
}

// A logo lives in the signed-out draft (localStorage, a few MB budget shared
// with everything else the browser stores for this origin) and, for everyone,
// in React state that gets JSON.stringify'd every 600ms by the autosave
// effect. Both want the string small. 320px is plenty for a header logo
// rendered at well under 200px tall, and PNG keeps transparency (most logos
// are PNG/SVG with a transparent background) without the quality loss a
// photo-oriented format would add on sharp edges and text.
const MAX_LOGO_DIMENSION = 320;
// A hard ceiling on the *encoded* data URL, independent of the resize above —
// a busy, photo-like "logo" can still encode large at 320px. Past this, the
// upload is rejected outright rather than silently bloating the draft.
export const MAX_LOGO_DATA_URL_LENGTH = 400_000;

/**
 * Downscale an image file to a data URL small enough to live in the invoice
 * draft. Rejects non-images and anything that still encodes too large after
 * resizing, with a message meant to be shown to the person who picked the
 * file.
 */
export function fileToLogoDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!isSupportedImageFile(file)) {
      reject(new Error("That file doesn't look like an image. Try a PNG, JPG, or SVG."));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Couldn't read that file — try again."));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Couldn't read that image — try a different file."));
      img.onload = () => {
        const scale = Math.min(1, MAX_LOGO_DIMENSION / Math.max(img.width, img.height) || 1);
        const w = Math.max(1, Math.round(img.width * scale));
        const h = Math.max(1, Math.round(img.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Your browser can't process images here — try a smaller file."));
          return;
        }
        ctx.drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL("image/png");
        if (dataUrl.length > MAX_LOGO_DATA_URL_LENGTH) {
          reject(new Error("That logo is still too large after resizing — try a simpler image."));
          return;
        }
        resolve(dataUrl);
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}
