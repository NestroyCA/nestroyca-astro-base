import {
	corpus,
	explore_corpus,
	painting_vienna,
	word_graph,
} from "@/config/image_metadata.config";

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
	corpus_download: {
		href: "/nestroylang",
		label: "Download Corpus",
		title: "Teaser: TEI annotated theatrical corpus according to the dracor.org schema.",
		image: corpus,
	},
	explore_corpus: {
		href: "/nestroylang",
		label: "Explore the digital corpus",
		title: "Explore the digital corpus (under construction)",
		image: explore_corpus,
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
	team: {
		href: "/team",
		label: "Team",
		title: "Team",
	},
};
