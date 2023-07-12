import { metadata } from "@/config/metadata.config";

const { locale } = metadata;

const formatters = {
	date: new Intl.DateTimeFormat(locale),
	list: new Intl.ListFormat(locale),
};

export function date(value: Date | number) {
	const formatter = formatters.date;
	return formatter.format(value);
}

export function list(value: Iterable<string>) {
	const formatter = formatters.list;
	return formatter.format(value);
}
