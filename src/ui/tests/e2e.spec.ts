import { test } from '@playwright/test';
import { PageManager } from '../pages/page-manager/page-manager';
import LoginData from '../test-data/login-data.json';
import ProductsData from '../test-data/products-data.json';
import PersonalInfo from '../test-data/personal-info.json';
import Messages from '../test-data/messages.json';

let pageManager: PageManager;

test.beforeEach(async ({ page }) => {
    pageManager = new PageManager(page);
    await pageManager.getLoginPage().navigateToLoginPage();
});

test('End-to-end flow for purchasing a product', async () => {
    // Login to the application
    await pageManager.getLoginPage().login(LoginData.valid.username, LoginData.valid.password);
    await pageManager.getLoginPage().verifyLoginSuccessful();
    // Add product to cart and proceed to checkout
    await pageManager.getProductsPage().addToCart(ProductsData.productName2);
    await pageManager.getProductsPage().verifyCartIconCount(1);
    await pageManager.getProductsPage().clickCartButton();
    // Verify product in cart and proceed to checkout
    await pageManager.getCartPage().verifyProductName(ProductsData.productName2);
    await pageManager.getCartPage().clickCheckoutButton();
    // Fill in personal information and continue to overview page
    await pageManager.getCheckoutPage().fillInformationForm(PersonalInfo.firstName, PersonalInfo.lastName, PersonalInfo.postalCode);
    await pageManager.getCheckoutPage().clickContinueButton();
    // Finish the purchase on the overview page
    await pageManager.getOverviewPage().verifyProductName(ProductsData.productName2);
    await pageManager.getOverviewPage().clickFinishButton();
    // Verify the confirmation message on the confirmation page
    await pageManager.getConfirmationPage().verifyConfirmationMessage(Messages.confirmationMessage);
    //Logout
    await pageManager.getLogoutPage().clickBurgerMenuButton();
    await pageManager.getLogoutPage().clickLogoutButton();
    await pageManager.getLogoutPage().verifyThatTheUserIsLoggedOut();
});