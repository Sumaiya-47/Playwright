import { expect } from "@playwright/test";
import * as locators from "../Constants/registerLocator";


exports.HomePage=class HomePage {
    constructor(page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto('http://practice.automationtesting.in/');
    }

    async Login() {
        await this.page.goto('https://automationexercise.com');
        await this.page.waitForLoadState('networkidle');
        await expect(this.page.locator(locators.signupLoginBtn)).toBeVisible();
        await this.page.locator(locators.signupLoginBtn).click();
        await expect(this.page.locator(locators.loginPageText)).toBeVisible();
        await this.page.locator(locators.loginEmail).fill('abcd_123@gmail.com');
        await this.page.locator(locators.loginPassword).fill('AbcdEfgh');
        await this.page.locator(locators.loginBtn).click();
        await expect(this.page.locator(locators.loggedInUserAfterLogin)).toBeVisible();
    }
    
    async verifyHomePage() {
        await expect(this.page.locator(locators.loggedInUserText)).toBeVisible();
    }

    async addProductToCart() {
        await this.page.locator(locators.productAddButton).click();
    }

    async navigateToCart() {
        await this.page.locator(locators.cartButton).nth(0).click();
    }

    async verifyProductInCart() {
        await expect(this.page.locator(locators.cartProductName)).toBeVisible();
    }

    async verifyCategoriesVisible() {
        await expect(await this.categoriesSidebar).toBeVisible();
    }
    async clickWomenCategory() {
        await this.womenCategory.click();
    }
    async clickDressCategory() {
        await this.dressCategoryLink.click();
    }
    async verifyCategoryPage() {
        await expect(await this.categoryPageText).toBeVisible();
    }
}