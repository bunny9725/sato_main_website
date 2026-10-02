import { readFileSync } from "node:fs";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

process.loadEnvFile();
const { POST } = await import("../app/api/enquiries/route");
const { pool } = await import("../lib/db");

const TAG = `test-${Date.now()}`;
const post = (body: unknown) =>
  POST(new Request("http://x/api/enquiries", { method: "POST", body: typeof body === "string" ? body : JSON.stringify(body) }));
const rows = async () => (await pool.query("SELECT name, phone, city FROM franchise_enquiries WHERE city LIKE $1", [`${TAG}%`])).rows;

beforeAll(() => pool.query(readFileSync("db/schema.sql", "utf8")));
afterAll(async () => {
  await pool.query("DELETE FROM franchise_enquiries WHERE city LIKE $1", [`${TAG}%`]);
  await pool.end();
});

describe("POST /api/enquiries", () => {
  it("stores a valid enquiry, trimmed", async () => {
    const res = await post({ name: "  Asha Rao ", phone: "+91 98765-43210", city: ` ${TAG} ` });
    expect(res.status).toBe(201);
    expect(await rows()).toEqual([{ name: "Asha Rao", phone: "+91 98765-43210", city: TAG }]);
  });

  it.each([
    ["missing name", { phone: "9876543210", city: `${TAG}-a` }],
    ["blank city", { name: "A", phone: "9876543210", city: "   " }],
    ["bad phone", { name: "A", phone: "abc123", city: `${TAG}-b` }],
    ["too long", { name: "A".repeat(201), phone: "9876543210", city: `${TAG}-c` }],
    ["invalid JSON", "{not json"],
  ])("rejects %s with 400 and stores nothing", async (_, body) => {
    const before = (await rows()).length;
    expect((await post(body)).status).toBe(400);
    expect((await rows()).length).toBe(before);
  });
});
