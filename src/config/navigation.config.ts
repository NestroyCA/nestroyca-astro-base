import {
	corpus,
	explore_corpus,
	painting_vienna,
	word_graph,
} from "@/config/image_metadata.config";

//const base = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;
export const links = {
	home: {
		//		href: base.concat("/"),
		href: "/",
		label: "Home",
		title: "Home",
	},
	nestroylang: {
		//		href: base.concat("/nestroylang"),
		href: "/nestroylang",
		label: "Nestroy’s Language",
		title: "Language Structure and Use in Nestroy’s Plays",
		image: word_graph,
	},
	corpus_download: {
		//		href: base.concat("/nestroylang"),
		href: "/nestroylang",
		label: "Download Corpus",
		title: "Teaser: TEI annotated theatrical corpus according to the dracor.org schema.",
		image: corpus,
	},
	explore_corpus: {
		//		href: base.concat("/nestroylang"),
		href: "/nestroylang",
		label: "Explore the digital corpus",
		title: "Explore the digital corpus (under construction)",
		image: explore_corpus,
	},
	projectvienna: {
		//		href: base.concat("/nestroyvienna"),
		href: "/nestroyvienna",
		label: "Nestroy’s Vienna",
		title: "Nestroy’s Vienna",
		image: painting_vienna,
	},
	entities: {
		//		href: base.concat("/entities"),
		href: "/entities",
		label: "Entities",
		title: "Entities",
	},
	entities_places: {
		//		href: base.concat("/entities"),
		href: "/places",
		label: "Places",
		title: "Places",
	},
	entities_persons: {
		//		href: base.concat("/entities"),
		href: "/persons",
		label: "Persons",
		title: "Persons",
	},
	entities_other: {
		//		href: base.concat("/entities"),
		href: "/entities",
		label: "Entities",
		title: "Entities",
	},
	team: {
		//		href: base.concat("/team"),
		href: "/team",
		label: "Team",
		title: "Team",
	},
};
