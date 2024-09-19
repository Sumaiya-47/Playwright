// // @ts-check
// // const { test, expect } = require('@playwright/test');

// // test('has title', async ({ page }) => {
// //   await page.goto('https://playwright.dev/');

// //   // Expect a title "to contain" a substring.
// //   await expect(page).toHaveTitle(/Playwright/);
// // });

// // test('get started link', async ({ page }) => {
// //   await page.goto('https://playwright.dev/');

// //   // Click the get started link.
// //   await page.getByRole('link', { name: 'Get started' }).click();

// //   // Expects page to have a heading with the name of Installation.
// //   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// // });



// // const { test, expect } = require("@playwright/test");
// // const path = require('path');

// // test('Welcome to the-internet', async ({ page }) => {
// //     await page.goto('https://demo.automationtesting.in/Register.html');

// //     await page.fill('input[placeholder="First Name"]', 'Summi');
// //     await page.fill('input[placeholder="Last Name"]', 'Mansoor');

// //     await page.check('input[value="FeMale"]');

// //     await page.click('input[value="Cricket"]');

// //     await page.dblclick('input[value="Movies"]');

// //     await page.click('input[id="firstpassword"]', { button: 'right' });

// //     const filePath = path.resolve('C:\\Users\\Sumaiya\\Downloads\\summisql.png');
// //     await page.setInputFiles('input[id="imagesrc"]', filePath);
   
// //     await page.waitForTimeout(8000);
// // });

// const { test, expect } = require('@playwright/test');

// test('Assertions on the Registration page', async ({ page }) => {
//     // 1. Navigate to the Register page
//     await page.goto('https://demo.automationtesting.in/Register.html');

//     // 2. Validate the page title
//     await expect(page).toHaveTitle('Register');

//     // 3. Validate the page URL
//     await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html');

//     // 4. Validate 'Register' header is displayed
//     await expect(page.locator('h2:has-text("Register")')).toBeVisible();

//     // 5. Click on the Cricket checkbox and validate whether it is checked
//     const cricketCheckbox = page.locator('input[value="Cricket"]');
//     await cricketCheckbox.check();
//     await expect(cricketCheckbox).toBeChecked();

//     // 6. Uncheck the Movies checkbox and validate whether it is unchecked
//     const moviesCheckbox = page.locator('input[value="Movies"]');
//     await moviesCheckbox.uncheck();
//     await expect(moviesCheckbox).not.toBeChecked();

//     // 7. Validate the Submit button and Refresh button are enabled
//     const submitButton = page.locator('#submitbtn');
//     const refreshButton = page.locator('#Button1');
//     await expect(submitButton).toBeEnabled();
//     await expect(refreshButton).toBeEnabled();

//     // 8. Validate that the Password and Address fields are not disabled
//     const passwordField = page.locator('#firstpassword');
//     const addressField = page.locator('textarea[ng-model="Adress"]');
//     await expect(passwordField).not.toBeDisabled();
//     await expect(addressField).not.toBeDisabled();

//     // 9. Validate the First Name field has attribute placeholder='First Name'
//     const firstNameField = page.locator('input[placeholder="First Name"]');
//     await expect(firstNameField).toHaveAttribute('placeholder', 'First Name');

//     // 10. Validate that Confirm Password field has id='secondpassword'
//     const confirmPasswordField = page.locator('#secondpassword');
//     await expect(confirmPasswordField).toHaveAttribute('id', 'secondpassword');
// });


const { test, expect } = require("@playwright/test");
const path = require('path');

test('Expect', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html');
    await expect(page).toHaveTitle('Register');

    await expect(page.locator('h2')).toHaveText('Register');

    await page.check('input[value="Cricket"]');
    await expect(page.locator('input[value="Cricket"]')).toBeChecked();

    await page.uncheck('input[value="Cricket"]');
    await expect(page.locator('input[value="Cricket"]')).not.toBeChecked();

    await expect(page.locator('#submitbtn')).toBeEnabled();
    await expect(page.locator('#Button1')).toBeEnabled();

    await expect(page.locator('textarea[ng-model="Adress"]')).not.toBeDisabled()
    await expect(page.locator('#firstpassword')).not.toBeDisabled();

    await expect(page.locator('#secondpassword')).toHaveAttribute('id', 'secondpassword');
    await expect(page.locator('input[placeholder="First Name"]')).toHaveAttribute('placeholder', 'First Name');
    await page.waitForTimeout(6000);

});