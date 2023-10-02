import { test, expect } from '@playwright/test';

const pages = [
  '/',
  '/404',
  '/glossary',
  '/glossary/powerd6',
  '/chapter/introduction',
  '/experiment/sample',
]

for (const p of pages) {
  test(`${p} passes accessibility check`, async ({ page }) => {
    await page.goto(p);

    await expect(page).toPassAxe();
  });
}