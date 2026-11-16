const { test, expect } = require('@playwright/test');

test('IT Help Desk Login Successfully', async ({ page }) => {

    // Step 1: Open login page
    await page.goto('http://58.27.213.86:8825/ithelpdesk/auth/login');

    // Step 2: Enter Employee ID
    await page.getByPlaceholder('Emp ID')
        .fill('3919');

    // Step 3: Enter Password
    await page.getByPlaceholder('Password')
        .fill('MNazeer@1122');

    // Step 4: Click Sign In
    await page.getByRole('button', { name: /sign in/i })
        .click();

    // Step 5: Verify dashboard URL
    await expect(page).toHaveURL(/\/admin\/index/);

    // Step 6: Verify dashboard heading
    await expect(
        page.getByRole('heading', { name: 'IT Helpdesk Dashboard' })
    ).toBeVisible();

});
