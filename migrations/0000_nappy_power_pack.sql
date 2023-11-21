CREATE TABLE IF NOT EXISTS "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone,
	"title" text NOT NULL,
	"hearts" integer DEFAULT 0,
	"image_url" text,
	"product_link" text NOT NULL
);
