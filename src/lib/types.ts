export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

export interface InvoiceData {
  // Sender
  fromName: string;
  fromEmail: string;
  fromAddress: string;
  fromPhone: string;
  // Client
  toName: string;
  toEmail: string;
  toAddress: string;
  // Invoice details
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  currency: string;
  // Items
  items: InvoiceItem[];
  // Additional
  notes: string;
  taxRate: number;
  discountRate: number;
  paymentTerms: string;
  amountPaid: number;
}

export const CURRENCIES: Record<string, { symbol: string; name: string }> = {
  USD: { symbol: "$", name: "US Dollar" },
  EUR: { symbol: "€", name: "Euro" },
  GBP: { symbol: "£", name: "British Pound" },
  CAD: { symbol: "CA$", name: "Canadian Dollar" },
  AUD: { symbol: "A$", name: "Australian Dollar" },
  JPY: { symbol: "¥", name: "Japanese Yen" },
  MXN: { symbol: "MX$", name: "Mexican Peso" },
  BRL: { symbol: "R$", name: "Brazilian Real" },
  INR: { symbol: "₹", name: "Indian Rupee" },
  CHF: { symbol: "CHF", name: "Swiss Franc" },
};

export function generateInvoiceNumber(): string {
  const d = new Date();
  const prefix = "INV";
  const ts = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}`;
  const rand = Math.floor(Math.random() * 9000 + 1000);
  return `${prefix}-${ts}-${rand}`;
}

export function calcSubtotal(items: InvoiceItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
}

export function calcTax(subtotal: number, taxRate: number): number {
  return subtotal * (taxRate / 100);
}

export function calcDiscount(subtotal: number, discountRate: number): number {
  return subtotal * (discountRate / 100);
}

export function calcTotal(items: InvoiceItem[], taxRate: number, discountRate: number): number {
  const sub = calcSubtotal(items);
  return sub + calcTax(sub, taxRate) - calcDiscount(sub, discountRate);
}

// Remaining balance after any deposit / amount already paid is subtracted from the total.
export function calcBalanceDue(total: number, amountPaid: number): number {
  return Math.max(0, total - (amountPaid || 0));
}

export function formatCurrency(amount: number, currency: string): string {
  const c = CURRENCIES[currency] || CURRENCIES.USD;
  return `${c.symbol}${amount.toFixed(2)}`;
}

export function createEmptyItem(): InvoiceItem {
  return { id: crypto.randomUUID(), description: "", quantity: 1, rate: 0 };
}

export function defaultInvoice(): InvoiceData {
  const today = new Date();
  const due = new Date(today);
  due.setDate(due.getDate() + 30);
  return {
    fromName: "",
    fromEmail: "",
    fromAddress: "",
    fromPhone: "",
    toName: "",
    toEmail: "",
    toAddress: "",
    invoiceNumber: generateInvoiceNumber(),
    invoiceDate: today.toISOString().split("T")[0],
    dueDate: due.toISOString().split("T")[0],
    currency: "USD",
    items: [createEmptyItem()],
    notes: "",
    taxRate: 0,
    discountRate: 0,
    paymentTerms: "Net 30",
    amountPaid: 0,
  };
}

export const PAYMENT_TERMS = [
  { label: "Due on Receipt", days: 0 },
  { label: "Net 7", days: 7 },
  { label: "Net 15", days: 15 },
  { label: "Net 30", days: 30 },
  { label: "Net 45", days: 45 },
  { label: "Net 60", days: 60 },
  { label: "Custom", days: null },
] as const;

export function calcDueDate(invoiceDate: string, termDays: number): string {
  const d = new Date(invoiceDate);
  d.setDate(d.getDate() + termDays);
  return d.toISOString().split("T")[0];
}
