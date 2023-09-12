import { z, reference, defineCollection } from 'astro:content';

// Defines a term and it's meaning
const glossary = defineCollection({
    type: 'data',
    schema: z.object({
        // The term, or word
        term: z.string(),
        // A short definitions
        definition: z.string(),
        // Optionally, a reference to a page that further explains it
        relatedPage: reference('glossaryPage').optional(),
    }),
});

// Explains a specific glossary item at length
const glossaryPage = defineCollection({
    type: 'content',
    schema: z.object({
        // The relevant glossary term
        glossary: reference('glossary')
    })
})

export const collections = {
    'glossary': glossary,
    'glossaryPage': glossaryPage,
};