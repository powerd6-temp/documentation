import type { CollectionEntry } from "astro:content";

export function sortByOrder(
    a: CollectionEntry<"chapter">,
    b: CollectionEntry<"chapter">,
): number {
    if (a.data.order === b.data.order) {
        return a.data.title.localeCompare(b.data.title)
    }
    return a.data.order > b.data.order ? 1 : -1
}