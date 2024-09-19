const { test, expect } = require('../Fixtures/fixture');
import {HomePage} from '../Pages/HomePage';

// const { test, expect } = require('@playwright/test');
// import {HomePage} from '../pages/HomePage';

test ('Login with mandatory field', { timeout: 60000 }, async({page}) => {
    const homePage = new HomePage(page);
    await homePage.Login() 
    await homePage.verifyHomePage(); 
    await homePage.navigateToCart();
    await homePage.verifyProductInCart();
  });

  test('Verify product category navigation', async ({ homePage }) => {
 
    await homePage.clickProducts();
    await homePage.verifyCategoriesVisible();
    await homePage.clickWomenCategory();
    await homePage.clickDressCategory();
    await homePage.verifyCategoryPage();
  });