const { test, expect } = require('@playwright/test');
import { Register } from '../registerPage';

test ('Register User', async({page}) => {
  const register = new Register(page);
 
  await register.navigateToHomePage();
  await register.clickSignupLogin();
  await register.fillSignupForm();
  await register.fillAccountInformation();
  await register.continueAfterAccountCreation();
  await register.deleteAccount();
});