import { type ImageMetadata } from "astro";

interface Metadata {
	locale: string;
	title: string;
	description: string;
	image: ImageMetadata & { alt?: string };
	twitter?: string;
}

export const metadata: Metadata = {
	locale: "en",
	title: "ACDH-CH Website",
	description: "",
	image: {
		src: "/assets/images/opengraph-image.png",
		width: 1200,
		height: 630,
		format: "png",
	},
	twitter: "acdh_oeaw",
};
