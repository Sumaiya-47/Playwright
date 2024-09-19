const {test, expect}= require('@playwright/test')
import { Register } from '../register';

test('Login with mandate fields', async({page}) => {
    const register = new Register(page);
    await register.login_with_valid_credentials();
});