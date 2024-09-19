const base= require('@playwright/test')
import {HomePage} from '../Pages/HomePage'
exports.test= base.test.extend({
    homePage: async({page},use)=> {
        const homePage= new HomePage(page);
        await homePage.Login()
        await use(homePage)
    }
});