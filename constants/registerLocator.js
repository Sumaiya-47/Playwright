export const signupLoginBtn = '//a[@href="/login"]';
export const signupName = 'input[data-qa="signup-name"]';
export const signupEmail = 'input[data-qa="signup-email"]';
export const signupBtn = '//button[@data-qa="signup-button"]';
export const genderRadioBtn = '#id_gender1';
export const password = '#password';
export const daysDropdown = '#days';
export const monthsDropdown = '#months';
export const yearsDropdown = '#years';
export const newsletterCheckbox = '#newsletter';
export const optinCheckbox = '#optin';
export const firstName = '#first_name';
export const lastName = '#last_name';
export const company = '#company';
export const address1 = '#address1';
export const address2 = '#address2';
export const countryDropdown = '#country';
export const state = '#state';
export const city = '#city';
export const zipcode = '#zipcode';
export const mobileNumber = '#mobile_number';
export const createAccountBtn = '//button[@data-qa="create-account"]';
export const continueBtn = '//a[@data-qa="continue-button"]';
export const loggedInUser = "//a[contains(., 'Logged in as') and .//b[text()='New User']]";
export const deleteAccountBtn = '//a[@href="/delete_account"]';
export const accountCreatedText = '//h2[@data-qa="account-created"]';
export const accountDeletedText = '//h2[@data-qa="account-deleted"]';

export const loginEmail = 'input[data-qa="login-email"]';
export const loginPassword = 'input[data-qa="login-password"]';
export const loginBtn = '//button[@data-qa="login-button"]';
export const loginPageText = 'text="Login to your account"';
export const loggedInUserAfterLogin = "//a[contains(., 'Logged in as') and .//b[text()='Abcd E']]";

// contactLocators
export const contactUsBtn = '//a[@href="/contact_us"]';
export const getInTouchText = '//h2[contains(text(), "Get In Touch")]';
export const nameInput = 'input[data-qa="name"]';
export const emailInput = 'input[data-qa="email"]';
export const subjectInput = 'input[data-qa="subject"]';
export const messageTextarea = 'textarea[data-qa="message"]';
export const uploadFileInput = 'input[name="upload_file"]';
export const submitBtn = '//input[@data-qa="submit-button"]';
export const successMessage = '//div[contains(@class, "status alert alert-success")]';
export const homeBtn = '//a[@href="/"]';

//HomePage Locator
export const loggedInUserText = "//a[contains(., 'Logged in as') and .//b[text()='Abcd E']]";

// Product and cart locators
export const productAddButton = '//button[@data-product-id="1"]'; 
export const cartButton = "//a[contains(.,'Cart')]";  
export const cartProductName = '//a[contains(text(), "Product Name")]'; 


//Women Category locators
export const categoriesSidebar = '//div[@class="left-sidebar"]';
export const womenCategory = '//a[@data-toggle="collapse" and @href="#Women"]';
export const dressCategoryLink = '//a[@href="/category_products/1"]';
export const categoryPageText = '//h2[contains(.,"Women - ")]';