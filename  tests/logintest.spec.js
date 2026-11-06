import { test, expect } from '@playwright/test';

const employeeId = process.env.IT_HELPDESK_EMPLOYEE_ID;
const password = process.env.IT_HELPDESK_PASSWORD;

test('IT Help Desk login opens the dashboard', async ({ page }) => {
    test.skip(
        !employeeId || !password,
        'Set IT_HELPDESK_EMPLOYEE_ID and IT_HELPDESK_PASSWORD to run this test.'
    );

    await page.goto('http://58.27.213.86:8825/ithelpdesk/auth/login');
    await page.getByPlaceholder('Emp ID').fill(employeeId);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: /^sign in$/i }).click();

    await expect(page).toHaveURL(/\/ithelpdesk\/admin\/index(?:[?#]|$)/);
    await expect(
        page.getByRole('heading', { name: /IT Helpdesk Dashboard/i })
    ).toBeVisible();
});
