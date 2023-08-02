import { type URL } from "url";

import corpus_image from "../../public/assets/images/corpus.png";
import explore_corpus_image from "../../public/assets/images/explore_corpus.png";
import jubilaeums_fonds from "../../public/assets/images/jubilaeums_fonds.png";
import nestroy_statue_image from "../../public/assets/images/nestroy_statue.png";
import nestroys_vienna from "../../public/assets/images/nestroys_vienna.png";
import oenb_image from "../../public/assets/images/oenb.png";
import stadt_wien_logo from "../../public/assets/images/stadt_wien_logo.png";
import word_graph_image from "../../public/assets/images/word_graph.png";

interface ImageData {
	title: string;
	description: string;
	image: ImageMetadata;
	licence: string;
	licence_url?: URL;
	source_url?: URL;
}

const ccby3 = "CCBY 3.0";
export const ccby3_url = "https://creativecommons.org/licenses/by/3.0/at/deed.de";

export const corpus: ImageData = {
	title: "",
	description: "Nestroy Corpus Analysis Project",
	image: corpus_image,
	licence: ccby3,
};
export const logo_vienna: ImageData = {
	title: "",
	description: "logo: city of vienna",
	image: stadt_wien_logo,
	licence: ccby3,
};
export const explore_corpus: ImageData = {
	title: "",
	description: "magnifying glass ",
	image: explore_corpus_image,
	licence: ccby3,
};
export const logo_jubilaeums_fonds: ImageData = {
	title: "",
	description: "logo of Jubiläums Fonds",
	image: jubilaeums_fonds,
	licence: ccby3,
};
export const nestroy_statue: ImageData = {
	title: "statue of Nestroy",
	description: "statue of Nestroy",
	image: nestroy_statue_image,
	licence: ccby3,
};
export const painting_vienna: ImageData = {
	title: "painting of vienna",
	description: "painting of vienna",
	image: nestroys_vienna,
	licence: ccby3,
};
export const logo_oenb: ImageData = {
	title: "logo of ÖNB",
	description: "logo of ÖNB",
	image: oenb_image,
	licence: ccby3,
};
export const word_graph: ImageData = {
	title: "logo of ÖNB",
	description: "logo of ÖNB",
	image: word_graph_image,
	licence: ccby3,
};
