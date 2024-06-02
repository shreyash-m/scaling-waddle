import { z } from "zod"

const envSchema = z.object({
  RESEND_API_KEY: z.string(),
  CLEARKAUTH_URL: z.string().url(),
  CLEARKAUTH_SECRET: z.string(),
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  MONGOOSEDB_URL: z.string(),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
})

envSchema.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL)
