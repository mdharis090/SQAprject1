
const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    // Verify Page Title
    const pagetitle = await page.title();
    console.log('Page title:', pagetitle);

    const expectedtitle = 'STORE';
    expect(pagetitle).toBe(expectedtitle);

    // Verify Page URL
    const pageurl = page.url();
    console.log('Page URL:', pageurl);

    const expectedurl = 'https://www.demoblaze.com/index.html';
    expect(pageurl).toBe(expectedurl);

});

