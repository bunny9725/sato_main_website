import { Pool } from "pg";

// Reuse one pool across dev hot reloads.
const g = globalThis as unknown as { pgPool?: Pool };
export const pool = (g.pgPool ??= new Pool({ connectionString: process.env.DATABASE_URL }));
