// import { test, expect } from '@playwright/test';

// test('IT Help Desk Login Test', async ({ page }) => {

//     // Step 1: Open website
//     await page.goto('http://58.27.213.86:8825/ithelpdesk/auth/login');

//     // Step 2: Enter Emp ID
//     // Note: Placeholder ka use kiya gaya hai kyunki ID/Name nahi pata.
//     // Agar aapko HTML inspect karke exact 'name' ya 'id' pata ho, toh usko use karein.
//     await page.getByPlaceholder('Emp ID').fill('3919');

//     // Step 3: Enter Password
//     await page.getByPlaceholder('Password').fill('MNazeer@1122');

//     // Step 4: Click Sign in Button
//     await page.getByRole('button', { name: 'Sign in' }).click();

//     // Step 5: Verify Successful Login
//     // Kyunki aapne bataya nahi ki login ke baad kya aata hai, 
//     // isliye yahan URL check kiya gaya hai.
//     // (Agar dashboard par koi heading aati hai, toh aap usko check kar sakte hain).
//     await expect(page).not.toHaveURL('http://58.27.213.86:8825/ithelpdesk/auth/login');
// });


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