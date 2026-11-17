
import { test, expect } from '@playwright/test';

test('Verify Checkboxes Functionality', async ({ page }) => {

    // Open website
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    // Locate first and second checkboxes
    const checkbox1 = page.locator('input[type="checkbox"]').nth(0);
    const checkbox2 = page.locator('input[type="checkbox"]').nth(1);

    // Verify initial state
    console.log('Checkbox 1:', await checkbox1.isChecked());
    console.log('Checkbox 2:', await checkbox2.isChecked());

    // Select first checkbox
    await checkbox1.check();

    // Verify first checkbox is selected
    await expect(checkbox1).toBeChecked();

    // Select second checkbox
    await checkbox2.check();

    // Verify second checkbox is selected
    await expect(checkbox2).toBeChecked();

    // Unselect first checkbox
    await checkbox1.uncheck();

    // Verify first checkbox is unselected
    await expect(checkbox1).not.toBeChecked();

    // Print final states
    console.log('Final Checkbox 1:', await checkbox1.isChecked());
    console.log('Final Checkbox 2:', await checkbox2.isChecked());

});
