import type { CollectionEntry } from 'astro:content';
import { describe, expect, test } from 'vitest';
import { Mock } from "moq.ts";
import { sortByDates } from '@libs/experiment';

const FIRST_DATE = new Date(0);
const SECOND_DATE = new Date(3600);

describe('Experiment are ordered by', () => {
    test('their startDate field', () => {
        const foo = new Mock<CollectionEntry<"experiment">>()
            .setup(c => c.data.startDate)
            .returns(FIRST_DATE)
            .object();
        const bar = new Mock<CollectionEntry<"experiment">>()
            .setup(c => c.data.startDate)
            .returns(SECOND_DATE)
            .object();

        expect([foo, bar].sort(sortByDates)).toEqual([foo, bar])
        expect([bar, foo].sort(sortByDates)).toEqual([foo, bar])
    })
    test('their endDate when the startDate field is the same', () => {
        const foo = new Mock<CollectionEntry<"experiment">>()
            .setup(c => c.data.startDate)
            .returns(FIRST_DATE)
            .setup(c => c.data.endDate)
            .returns(FIRST_DATE)
            .object();
        const bar = new Mock<CollectionEntry<"experiment">>()
            .setup(c => c.data.startDate)
            .returns(FIRST_DATE)
            .setup(c => c.data.endDate)
            .returns(SECOND_DATE)
            .object();
        const qux = new Mock<CollectionEntry<"experiment">>()
            .setup(c => c.data.startDate)
            .returns(FIRST_DATE)
            .setup(c => c.data.endDate)
            .returns(undefined)
            .object();

        expect([foo, bar, qux].sort(sortByDates)).toEqual([foo, bar, qux])
        expect([bar, foo, qux].sort(sortByDates)).toEqual([foo, bar, qux])
    })
    test('their title when the startDate field is the same and the endDate is empty', () => {
        const foo = new Mock<CollectionEntry<"experiment">>()
            .setup(c => c.data.startDate)
            .returns(FIRST_DATE)
            .setup(c => c.data.title)
            .returns("a")
            .object();
        const bar = new Mock<CollectionEntry<"experiment">>()
            .setup(c => c.data.startDate)
            .returns(FIRST_DATE)
            .setup(c => c.data.title)
            .returns("b")
            .object();

        expect([foo, bar].sort(sortByDates)).toEqual([foo, bar])
        expect([bar, foo].sort(sortByDates)).toEqual([foo, bar])
    })
})