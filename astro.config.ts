import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import { defineConfig, sharpImageService } from "astro/config";
import icon from "astro-icon";

import { env } from "./src/lib/env";

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true,
	},
	image: {
		service: sharpImageService(),
	},
	integrations: [
		icon({
			include: {
				lucide: ["*"],
			},
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: "preset-default",
						params: {
							overrides: {
								removeViewBox: false,
							},
						},
					},
				],
			},
		}),
		mdx(),
		prefetch(),
		sitemap(),
		alpinejs(),
	],
	markdown: {
		syntaxHighlight: false,
	},
	site: env.PUBLIC_APP_BASE_URL,
	base: env.PUBLIC_APP_BASE_PATH,
});
