import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { createInsertSchema, createSelectSchema } from "drizzle-valibot"
import { sql } from "drizzle-orm"


export const timeAttribute = () => sql`(strftime('%s', 'now'))`


export const proxies = sqliteTable("proxies", {
  id: integer("id").primaryKey(),
  address: text("title").notNull(),
  region: text("region"),
  used: integer("body").default(0),
  valid: integer("valid", { mode: "boolean" }).default(true),
  createdAt: integer("created_at", { mode: "timestamp" }).default(timeAttribute()),
  updateAt: integer("updated_at", { mode: "timestamp" }).default(timeAttribute())
})

export const insertProxiesSchema = createInsertSchema(proxies)
export const selectProxiesSchema = createSelectSchema(proxies)