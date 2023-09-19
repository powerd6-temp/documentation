import type { CollectionEntry } from 'astro:content';
import { glossaryHasLongFormExplanation } from 'src/content/glossary/_';
import { describe, expect, test } from 'vitest';
import { Mock } from "moq.ts";

describe('Glossary items have no long form explanation when', () => {
    test('they have no body', () => {
        const term: CollectionEntry<'glossary'> = new Mock<CollectionEntry<'glossary'>>()
            .setup(i => i.body)
            .returns(null as unknown as string)
            .object()

        expect(glossaryHasLongFormExplanation(term)).toBe(false);
    })
    test('they have an empty body', () => {
        const term: CollectionEntry<'glossary'> = new Mock<CollectionEntry<'glossary'>>()
            .setup(i => i.body)
            .returns("")
            .object()

        expect(glossaryHasLongFormExplanation(term)).toBe(false)
    })
    test('they have a body comprised of blank space', () => {
        const term: CollectionEntry<'glossary'> = new Mock<CollectionEntry<'glossary'>>()
            .setup(i => i.body)
            .returns(" ")
            .object()

        expect(glossaryHasLongFormExplanation(term)).toBe(false)
    })
    test('they have a body comprised of blank spaces and new lines', () => {
        const term: CollectionEntry<'glossary'> = new Mock<CollectionEntry<'glossary'>>()
            .setup(i => i.body)
            .returns(" \n \n\r ")
            .object()

        expect(glossaryHasLongFormExplanation(term)).toBe(false)
    })
})
describe('Glossary items have long form explanation when', () => {
    test('they have a body', () => {
        const term: CollectionEntry<'glossary'> = new Mock<CollectionEntry<'glossary'>>()
            .setup(i => i.body)
            .returns("Some description")
            .object()

        expect(glossaryHasLongFormExplanation(term)).toBe(true)
    })
})