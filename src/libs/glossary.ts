import { type CollectionEntry } from "astro:content";


export function glossaryHasLongFormExplanation(glossary: CollectionEntry<'glossary'>) {
    return glossary.body !== null && glossary.body !== undefined && glossary.body.trim() != "";
}

export function sortAlphabetically(
    a: CollectionEntry<"glossary">,
    b: CollectionEntry<"glossary">,
): number {
    return a.data.title.localeCompare(b.data.title);
}