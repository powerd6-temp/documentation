import type { CollectionEntry } from 'astro:content';
import { glossaryHasLongFormExplanation, sortAlphabetically } from 'src/libs/glossary';
import { describe, expect, test } from 'vitest';
import { Mock } from "moq.ts";
import { sortByOrder } from '@libs/chapter';

describe('Chapters are ordered by', () => {
    test('their order field', () => {
        const foo = new Mock<CollectionEntry<"chapter">>()
            .setup(c => c.data.order)
            .returns(1)
            .object();
        const bar = new Mock<CollectionEntry<"chapter">>()
            .setup(c => c.data.order)
            .returns(2)
            .object();

        expect([foo, bar].sort(sortByOrder)).toEqual([foo, bar])
        expect([bar, foo].sort(sortByOrder)).toEqual([foo, bar])
    })
    test('their title when the order field is the same', () => {
        const foo = new Mock<CollectionEntry<"chapter">>()
            .setup(c => c.data.order)
            .returns(1)
            .setup(c => c.data.title)
            .returns("a")
            .object();
        const bar = new Mock<CollectionEntry<"chapter">>()
            .setup(c => c.data.order)
            .returns(1)
            .setup(c => c.data.title)
            .returns("b")
            .object();

        expect([foo, bar].sort(sortByOrder)).toEqual([foo, bar])
        expect([bar, foo].sort(sortByOrder)).toEqual([foo, bar])
    })
})