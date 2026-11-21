
import { test, expect } from '@playwright/test';
test('verify Drope Down Functionality',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator('#dropdown').selectOption({label:'Option 1'});
    await page.locator('#dropdown').selectOption('Option 2');
    expect(await page.locator('#dropdown').isVisible()).toBeTruthy();
    await page.selectOption('#dropdown','1');
    expect(await page.locator('#dropdown').inputValue()).toBe('1');
    await page.selectOption('#dropdown','2');
    expect(await page.locator('#dropdown').inputValue()).toBe('2');

})