import { pool } from "./db";

export type Enquiry = { name: string; phone: string; city: string };

const PHONE = /^[0-9 +\-]{7,}$/;

/** Returns a trimmed enquiry, or null if any field is missing, blank, too long, or the phone is malformed. */
export function parseEnquiry(body: unknown): Enquiry | null {
  const b = (body ?? {}) as Record<string, unknown>;
  const [name, phone, city] = [b.name, b.phone, b.city].map((v) => (typeof v === "string" ? v.trim() : ""));
  if ([name, phone, city].some((v) => !v || v.length > 200) || !PHONE.test(phone)) return null;
  return { name, phone, city };
}

export async function saveEnquiry({ name, phone, city }: Enquiry) {
  await pool.query("INSERT INTO franchise_enquiries (name, phone, city) VALUES ($1, $2, $3)", [name, phone, city]);
}
