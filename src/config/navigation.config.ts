import { painting_vienna, word_graph } from "@/config/image_metadata.config";

export const links = {
	home: {
		href: "/",
		label: "Home",
		title: "Home",
	},
	nestroylang: {
		href: "/nestroylang",
		label: "Nestroy’s Language",
		title: "Language Structure and Use in Nestroy’s Plays",
		image: word_graph,
	},
	projectvienna: {
		href: "/nestroyvienna",
		label: "Nestroy’s Vienna",
		title: "Nestroy’s Vienna",
		image: painting_vienna,
	},
	entities: {
		href: "/entities",
		label: "Entities",
		title: "Entities",
	},
	corpus: {
		href: "/corpus",
		label: "Corpus",
		title: "Corpus",
	},
	team: {
		href: "/team",
		label: "Team",
		title: "Team",
	},
};
