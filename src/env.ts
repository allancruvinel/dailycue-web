import {z} from "zod";

const envSchema = z.object({
    VITE_GOOGLE_OAUTH_CLIENT_ID: z.string().min(1, "VITE_GOOGLE_OAUTH_CLIENT_ID is required"),
    VITE_DAILY_CUE_API_URL: z.string().min(1, "VITE_DAILY_CUE_API_URL is required"),
});

const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
    console.error("Invalid environment variables:", parsedEnv.error.format());
    throw new Error("Invalid environment variables");
}

export const env = {
    VITE_GOOGLE_OAUTH_CLIENT_ID: parsedEnv.data.VITE_GOOGLE_OAUTH_CLIENT_ID,
    VITE_DAILY_CUE_API_URL: parsedEnv.data.VITE_DAILY_CUE_API_URL
}

