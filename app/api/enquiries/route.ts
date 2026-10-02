import { parseEnquiry, saveEnquiry } from "../../../lib/enquiries";

export async function POST(req: Request) {
  const enquiry = parseEnquiry(await req.json().catch(() => null));
  if (!enquiry) return Response.json({ error: "Invalid enquiry" }, { status: 400 });
  await saveEnquiry(enquiry);
  return Response.json({ ok: true }, { status: 201 });
}
