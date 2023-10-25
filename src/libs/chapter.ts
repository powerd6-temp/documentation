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

export function findOnlyParentChapters(chapter: CollectionEntry<"chapter">): boolean {
    return !chapter.data.parent
}

export function findChildrenOfChapter(chapter: CollectionEntry<"chapter">, parentChapter: CollectionEntry<"chapter">): boolean {
    return chapter.data.parent?.slug == parentChapter.slug
}