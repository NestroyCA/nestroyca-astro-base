import typographyPlugin from "@tailwindcss/typography";
import { type Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
	content: [
		"./src/components/**/*.@(astro|css|ts|tsx)",
		"./src/content/**/*.@(md|mdx)",
		"./src/layouts/**/*.@(astro|css|ts|tsx)",
		"./src/pages/**/*.@(astro|css|ts|tsx)",
	],
	darkMode: ["class", '[data-color-scheme="dark"]'],
	plugins: [animatePlugin, typographyPlugin],
	theme: {
		extend: {
			colors: {
				neutral: {
					"50": "hsl(var(--color-neutral-50) / <alpha-value>)",
					"100": "hsl(var(--color-neutral-100) / <alpha-value>)",
					"200": "hsl(var(--color-neutral-200) / <alpha-value>)",
					"300": "hsl(var(--color-neutral-300) / <alpha-value>)",
					"400": "hsl(var(--color-neutral-400) / <alpha-value>)",
					"500": "hsl(var(--color-neutral-500) / <alpha-value>)",
					"600": "hsl(var(--color-neutral-600) / <alpha-value>)",
					"700": "hsl(var(--color-neutral-700) / <alpha-value>)",
					"800": "hsl(var(--color-neutral-800) / <alpha-value>)",
					"900": "hsl(var(--color-neutral-900) / <alpha-value>)",
					"950": "hsl(var(--color-neutral-950) / <alpha-value>)",
				},

				background: "hsl(var(--color-background) / <alpha-value>)",
				foreground: "hsl(var(--color-foreground) / <alpha-value>)",

				surface: {
					background: "hsl(var(--color-surface-background) / <alpha-value>)",
					foreground: "hsl(var(--color-surface-foreground) / <alpha-value>)",
				},

				muted: {
					background: "hsl(var(--color-muted-background) / <alpha-value>)",
					foreground: "hsl(var(--color-muted-foreground) / <alpha-value>)",
				},

				brand: {
					background: "hsl(var(--color-brand-background) / <alpha-value>)",
					foreground: "hsl(var(--color-brand-foreground) / <alpha-value>)",
				},

				separator: "hsl(var(--color-separator) / <alpha-value>)",
				"focus-ring": "hsl(var(--color-focus-ring) / <alpha-value>)",
			},
			container: {
				center: true,
				padding: "1rem",
				/**
				 * Bootstrap 4 containers.
				 */
				screens: {
					sm: "540px",
					md: "720px",
					lg: "960px",
					xl: "1140px",
				},
			},
			fontFamily: {
				body: ["Roboto Flex Variable", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
					},
				},
			},
		},
		/**
		 * Bootstrap 4 breakpoints.
		 */
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
		},
	},
};

export default config;
