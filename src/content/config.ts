import { z, reference, defineCollection } from 'astro:content';

// Defines a term and it's meaning. Optionally, the term can be explained  with a full-length page.
const glossary = defineCollection({
    type: 'content',
    schema: z.object({
        // The term, or word
        term: z.string(),
        // A short definition, meant to be used in tooltips
        definition: z.string()
    }),
});

// An experiment that was, or is being, performed to help decision making
const experiment = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        goal: z.string(),
    })
})

// A chapter that needs to be read
const chapter = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        order: z.number().int().positive(),
    })
})

export const collections = {
    'glossary': glossary,
    'experiment': experiment,
    'chapter': chapter,
};