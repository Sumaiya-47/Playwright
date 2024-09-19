 import {test} from '@playwright/test'

// test('facebook logon',async({page})=> {
// await page.goto("https://www.facebook.com/")
// await page.locator("//input[@name='email']").fill('xyz')
// await page.locator('#loginbutton').click()
// await page.waitForTimeout(5000);
// })


// const {test, expect } = require("@playwright/test");
const path = require('path');

test('Welcome to the-internet', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');

    await page.fill('input[placeholder="First Name"]', 'Summi');
    await page.fill('input[placeholder="Last Name"]', 'Mansoor');

    await page.check('input[value="FeMale"]');

    await page.click('input[value="Cricket"]');

    await page.dblclick('input[value="Movies"]');

    await page.click('input[id="firstpassword"]', { button: 'right' });

    const filePath = path.resolve('C:\\Users\\Sumaiya\\Downloads\\playwright.txt');
    await page.setInputFiles('input[id="imagesrc"]', filePath);
   
    await page.waitForTimeout(8000);
});