import { createEnv } from "@t3-oss/env-core";
import { loadEnv } from "vite";
import { z } from "zod";

const environment = loadEnv(import.meta.env.MODE, process.cwd(), "");

declare global {
	interface ImportMetaEnv {
		readonly BOTS?: string | undefined;
		readonly ENV_VALIDATION?: string | undefined;
		readonly PUBLIC_APP_BASE_PATH?: string | undefined;
		readonly PUBLIC_APP_BASE_URL?: string | undefined;
		readonly PUBLIC_MATOMO_BASE_URL?: string | undefined;
		readonly PUBLIC_MATOMO_ID?: string | undefined;
		readonly PUBLIC_REDMINE_ID?: string | undefined;
	}

	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}
}

export const env = createEnv({
	clientPrefix: "PUBLIC_",
	server: {
		BOTS: z.enum(["disabled", "enabled"]).optional(),
		ENV_VALIDATION: z.enum(["disabled", "enabled"]).optional(),
		NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
	},
	client: {
		PUBLIC_APP_BASE_URL: z.string().url(),
		PUBLIC_APP_BASE_PATH: z.string().min(1).optional(),
		PUBLIC_MATOMO_BASE_URL: z.string().url().optional(),
		PUBLIC_MATOMO_ID: z.string().min(1).optional(),
		PUBLIC_REDMINE_ID: z.coerce.number().min(1),
	},
	runtimeEnv: environment,
	skipValidation: environment.ENV_VALIDATION === "disabled",
});
