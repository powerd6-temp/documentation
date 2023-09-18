import { z, defineCollection } from 'astro:content';
import { type CollectionEntry } from "astro:content";

// Defines a term and it's meaning. Optionally, the term can be explained  with a full-length page.
export const glossary = defineCollection({
    type: 'content',
    schema: z.object({
        // The term, or word
        term: z.string(),
        // A short definition, meant to be used in tooltips
        definition: z.string()
    }),
});

export function glossaryHasLongFormExplanation(glossary: CollectionEntry<'glossary'>) {
    return glossary.body || glossary.body.trim() != "";
}