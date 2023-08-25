import {
	corpus,
	explore_corpus,
	painting_vienna,
	word_graph,
} from "@/config/image_metadata.config";

const base = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;
export const links = {
	home: {
		href: base.concat("/"),
		label: "Home",
		title: "Home",
	},
	nestroylang: {
		href: base.concat("/nestroylang"),
		label: "Nestroy’s Language",
		title: "Language Structure and Use in Nestroy’s Plays",
		image: word_graph,
	},
	corpus_download: {
		href: base.concat("/nestroylang"),
		label: "Download Corpus",
		title: "Teaser: TEI annotated theatrical corpus according to the dracor.org schema.",
		image: corpus,
	},
	explore_corpus: {
		href: base.concat("/nestroylang"),
		label: "Explore the digital corpus",
		title: "Explore the digital corpus (under construction)",
		image: explore_corpus,
	},
	projectvienna: {
		href: base.concat("/nestroyvienna"),
		label: "Nestroy’s Vienna",
		title: "Nestroy’s Vienna",
		image: painting_vienna,
	},
	entities: {
		href: base.concat("/entities"),
		label: "Entities",
		title: "Entities",
	},
	team: {
		href: base.concat("/team"),
		label: "Team",
		title: "Team",
	},
};
