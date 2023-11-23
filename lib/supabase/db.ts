import {drizzle} from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import {migrate} from "drizzle-orm/postgres-js/migrator";

import * as schema from "@/migrations/schema";

dotenv.config({path: ".env"});

if (!process.env.DATABASE_URL) {
  console.log("🔴 no database URL");
  throw new Error("DATABASE_URL is not defined");
}

const client = postgres(process.env.DATABASE_URL, {max: 1});
const db = drizzle(client, {schema});
const migrateDb = async () => {
  try {
    console.log("🟡 Migrating client");
    await migrate(db, {migrationsFolder: "migrations"});
    console.log("🟢 Successfully Migrated");
  } catch (error) {
    console.log("🔴 Error migrating client");
    console.log(error);
  }
};

migrateDb();

export default db;
