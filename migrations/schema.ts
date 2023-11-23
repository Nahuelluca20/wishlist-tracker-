import {pgTable, pgEnum, uuid, timestamp, text, integer, real} from "drizzle-orm/pg-core";
import {sql} from "drizzle-orm";

export const keyStatus = pgEnum("key_status", ["expired", "invalid", "valid", "default"]);

export const keyType = pgEnum("key_type", [
  "stream_xchacha20",
  "secretstream",
  "secretbox",
  "kdf",
  "generichash",
  "shorthash",
  "auth",
  "hmacsha256",
  "hmacsha512",
  "aead-det",
  "aead-ietf",
]);

export const factorType = pgEnum("factor_type", ["webauthn", "totp"]);

export const factorStatus = pgEnum("factor_status", ["verified", "unverified"]);

export const aalLevel = pgEnum("aal_level", ["aal3", "aal2", "aal1"]);

export const codeChallengeMethod = pgEnum("code_challenge_method", ["plain", "s256"]);

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createdAt: timestamp("created_at", {withTimezone: true, mode: "string"}),
  title: text("title").notNull(),
  hearts: integer("hearts").default(0),
  imageUrl: text("image_url"),
  productLink: text("product_link").notNull(),
  price: real("price"),
});

export const users = pgTable("users", {
  id: uuid("id").primaryKey().notNull(),
  createdAt: timestamp("created_at", {withTimezone: true, mode: "string"}),
});
