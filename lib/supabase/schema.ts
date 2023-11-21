import {integer, pgTable, text, timestamp, uuid} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }),
  title: text("title").notNull(),
  hearts: integer("hearts").default(0),
  imageUrl: text("image_url"),
  productLink: text("product_link").notNull(),
});
