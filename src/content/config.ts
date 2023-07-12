import { defineCollection, z } from "astro:content";

const pages = defineCollection({
	type: "content",
	schema({ image }) {
		return z.object({
			title: z.string(),
			meta: z
				.object({
					title: z.string().optional(),
					description: z.string().optional(),
					image: image().optional(),
				})
				.optional(),
		});
	},
});

export const collections = { pages };
