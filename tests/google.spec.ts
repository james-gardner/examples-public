import { test, expect } from '@playwright/test';

// Before each test, navigate to the Google homepage
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.google.com');
});

test('should load the Google homepage', async ({ page }) => {
  // Check if the title is correct
  await expect(page).toHaveTitle('Google');

  // Check if the Google logo is visible
  const logo = page.locator('img[alt="Google"]');
  await expect(logo).toBeVisible();
});

test('should have a search input field', async ({ page }) => {
  // Check if the search input field is visible
  const searchInput = page.locator('textarea[name="q"]');
  await expect(searchInput).toBeVisible();

  // Check if the search input field is enabled
  await expect(searchInput).toBeEnabled();
});