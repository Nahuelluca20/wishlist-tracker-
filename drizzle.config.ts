import type {Config} from "drizzle-kit";

import * as dotenv from "dotenv";

dotenv.config({path: ".env"});

if (!process.env.DATABASE_URL) {
  console.log("🔴 no database URL");
  throw new Error("DATABASE_URL is not defined");
}

export default {
  schema: "./lib/supabase/schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || "",
  },
} satisfies Config;
