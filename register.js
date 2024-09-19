const { timeout } = require("./playwright.config")

exports.Register = class Register {
    constructor (page) {
        this.page = page
        this.firstName = page.locator('input[placeholder="First Name"]')
        this.lastName = page.locator('input[placeholder="Last Name"]')
        this.address = page.locator('textarea[ng-model="Adress"]')
        this.emailAddress = page.locator('input[ng-model="EmailAdress"]')
        this.phone = page.locator('input[ng-model="Phone"]')
        this.gender = page.locator('input[value="FeMale"]')
        
    }

    async login_with_valid_credentials() {
        await this.page.goto('https://demo.automationtesting.in/Register.html')
        await this.firstName.fill('Sumaiya')
        await this.lastName.fill('Mansoor')
        await this.address.fill('Bangalore')
        await this.emailAddress.fill('abc@gmail.com')
        await this.phone.fill('1234567890')
        await this.gender.click('FeMale')
        await this.page.waitForTimeout(8000)
    }

   
}