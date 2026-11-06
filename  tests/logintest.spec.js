// import{test,expect} from '@playwright/test';
// test('Login Test',async({page})=>{
//     await page.goto('https://www.demoblaze.com/index.html')
//     //click one login button properly 
//     //same method but difernect waya 
//     //await page.locator('id=login2').click()
//     await page.click('id=login2')
//     //provide username and password 
//    // await page.locator('#loginusername').fill('testuser')
//    await page.fill('#loginusername','testuser')


//    // await page.locator('#loginpassword').fill('testpassword')
//     await page.fill('#loginpassword','testpassword')

//     await page.click('button[onclick="logIn()"]')

//     await expect(page).toHaveURL('https://www.demoblaze.com/index.html#')

//     await  page.close()
    

// })


import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

    // Step 1: Open website
    await page.goto('http://58.27.213.86:8825/ithelpdesk/auth/login');

    // Step 2: Click Login
    await page.click('#login2');

    // Step 3: Verify Login Modal
    await expect(page.locator('#logInModal')).toBeVisible();

    // Step 4: Enter Username
    await page.fill('#loginusername', 'testuser');

    // Step 5: Enter Password
    await page.fill('#loginpassword', 'testpassword');

    // Step 6: Click Login Button
    await page.click('button[onclick="logIn()"]');

    // Step 7: Verify Successful Login
    await expect(page.locator('#nameofuser'))
        .toContainText('Welcome testuser');

});
