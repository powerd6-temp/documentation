import { test, expect } from '@playwright/test';

test.describe('sidebar on small screens', () => {
    test.skip(({ isMobile }) => !isMobile, 'is not mobile');

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    });

    test('starts hidden', async ({ page }) => {
        await expect(page.getByRole("navigation", { name: "Main navigation menu" })).toBeHidden()
    });

    test('have a visible hide/show button', async ({ page }) => {
        await expect(page.getByRole("button", { name: /(Hide|Show) Menu/ })).toBeVisible()
    });

    test('are toggled by the hide/show button', async ({ page }) => {
        await expect(page.getByRole("navigation", { name: "Main navigation menu" })).toBeHidden()
        await expect(page.getByRole("button", { name: /(Hide|Show) Menu/ })).toBeVisible()
        await page.getByRole("button", { name: /(Hide|Show) Menu/ }).click()
        await expect(page.getByRole("navigation", { name: "Main navigation menu" })).toBeVisible()
        await page.getByRole("button", { name: /(Hide|Show) Menu/ }).click()
        await expect(page.getByRole("navigation", { name: "Main navigation menu" })).toBeHidden()
    });
})

test.describe('sidebar on other screens', () => {
    test.skip(({ isMobile }) => isMobile, 'is mobile');

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    });

    test('are visible on start', async ({ page }) => {
        await expect(page.getByRole("navigation", { name: "Main navigation menu" })).toBeVisible()
    });

    test('have no hide/show button', async ({ page }) => {
        await expect(page.getByRole("button", { name: /(Hide|Show) Menu/ })).toBeHidden()
    });
})