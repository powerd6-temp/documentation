import { test, expect } from '@playwright/test';

const pages = [
  '/',
  '/glossary',
]

for (const p of pages) {
  test(`${p} passes accessibility check`, async ({ page }) => {
    await page.goto(p);
  
    await expect(page).toPassAxe();
  });
}