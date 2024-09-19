import { expect } from "@playwright/test";

exports.Register = class Register{
    constructor(page){
        this.page=page
        this.signupLoginBtn = page.locator('//a[@href="/login"]');
        this.signupName = page.locator('input[data-qa="signup-name"]');
        this.signupEmail = page.locator('input[data-qa="signup-email"]');
        this.signupBtn = page.locator('//button[@data-qa="signup-button"]');
        this.genderRadioBtn = page.locator('#id_gender1');
        this.password = page.locator('#password');
        this.daysDropdown = page.locator('#days');
        this.monthsDropdown = page.locator('#months');
        this.yearsDropdown = page.locator('#years');
        this.newsletterCheckbox = page.locator('#newsletter');
        this.optinCheckbox = page.locator('#optin');
        this.firstName = page.locator('#first_name');
        this.lastName = page.locator('#last_name');
        this.company = page.locator('#company');
        this.address1 = page.locator('#address1');
        this.address2 = page.locator('#address2');
        this.countryDropdown = page.locator('#country');
        this.state = page.locator('#state');
        this.city = page.locator('#city');
        this.zipcode = page.locator('#zipcode');
        this.mobileNumber = page.locator('#mobile_number');
        this.createAccountBtn = page.locator('//button[@data-qa="create-account"]');
        this.continueBtn = page.locator('//a[@data-qa="continue-button"]');
        this.loggedInUser = page.locator("//a[contains(., 'Logged in as') and .//b[text()='New User']]");
        this.deleteAccountBtn = page.locator('//a[@href="/delete_account"]');
        this.accountCreatedText = page.locator('//h2[@data-qa="account-created"]');
        this.accountDeletedText = page.locator('//h2[@data-qa="account-deleted"]');
    }

    async navigateToHomePage() {
        await this.page.goto('https://automationexercise.com');
        await expect(this.page).toHaveURL('https://automationexercise.com/');
        await expect(this.page).toHaveTitle('Automation Exercise');
    }

    async clickSignupLogin() {
        await this.signupLoginBtn.click()
        await expect(this.page).toHaveURL('https://automationexercise.com/login')
        await expect(this.page.getByText('New User Signup!')).toBeVisible()
    }

    async fillSignupForm() {
        await this.signupName.fill('New User');
        await this.signupEmail.fill('summi@gmail.com');
        await this.signupBtn.click();
        await expect(this.page).toHaveURL('https://automationexercise.com/signup');
        await expect(this.page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();
    }

    async fillAccountInformation() {
        await this.genderRadioBtn.check();
        await this.password.fill('newuser');
        await this.daysDropdown.selectOption('15');
        await this.monthsDropdown.selectOption('8');
        await this.yearsDropdown.selectOption('2000');
        await this.newsletterCheckbox.check();
        await this.optinCheckbox.check();
        await this.firstName.fill('summi');
        await this.lastName.fill('m');
        await this.company.fill('abcd');
        await this.address1.fill('qwerty');
        await this.address2.fill('asdfgh');
        await this.countryDropdown.selectOption('India');
        await this.state.fill('Karnataka');
        await this.city.fill('Bangalore');
        await this.zipcode.fill('560008');
        await this.mobileNumber.fill('1234567890');
        await this.createAccountBtn.click();
        await expect(this.accountCreatedText).toBeVisible();
    }

    async continueAfterAccountCreation() {
        await this.continueBtn.click();
        await expect(this.loggedInUser).toBeVisible();
    }

    async deleteAccount() {
        await this.deleteAccountBtn.click();
        await expect(this.accountDeletedText).toBeVisible();
        await this.continueBtn.click();
    }}