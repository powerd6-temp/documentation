import type { CollectionEntry } from "astro:content";

export function sortByDates(
    a: CollectionEntry<"experiment">,
    b: CollectionEntry<"experiment">,
): number {
    if (a.data.startDate === b.data.startDate) {
        if (a.data.endDate && b.data.endDate) {
            return a.data.endDate.getTime() - b.data.endDate.getTime()
        } else if (a.data.endDate) {
            // B has not finished yet, place it at the end
            return -1
        } else if (b.data.endDate) {
            // A has not finished yet, place it at the end
            return 1
        } else {
            // A and B have not finished yet, sort them by title
            return a.data.title.localeCompare(b.data.title)
        }
    }
    return a.data.startDate > b.data.startDate ? 1 : -1
}