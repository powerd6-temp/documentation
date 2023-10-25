import { z, defineCollection, reference } from 'astro:content';

const pageSchema = z.object({
    title: z.string()
});

// Defines a term and it's meaning. Optionally, the term can be explained  with a full-length page.
const glossary = defineCollection({
    type: 'content',
    schema: pageSchema.extend({
        // A short definition, meant to be used in tooltips
        definition: z.string()
    }),
});

// An experiment that was, or is being, performed to help decision making
const experiment = defineCollection({
    type: 'content',
    schema: pageSchema.extend({
        goal: z.string(),
        startDate: z.date(),
        endDate: z.date().optional(),
    })
})

// A chapter that needs to be read
const chapter = defineCollection({
    type: 'content',
    schema: pageSchema.extend({
        excerpt: z.string().optional(),
        order: z.number().int().positive(),
        parent: reference('chapter').optional(),
    })
})

export const collections = {
    'glossary': glossary,
    'experiment': experiment,
    'chapter': chapter,
};