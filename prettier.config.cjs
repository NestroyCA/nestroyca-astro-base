const shared = require("@acdh-oeaw/prettier-config");

/** @type {import('prettier').Config} */
const config = {
	...shared,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		...shared.overrides,
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};

module.exports = config;
