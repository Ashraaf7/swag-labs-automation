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
    await pageManager.getLoginPage().login(LoginData.valid.username, LoginData.valid.password);
});

test('Verify product name on overview page', async () => {
    await pageManager.getProductsPage().addToCart(ProductsData.productName2);
    await pageManager.getProductsPage().clickCartButton();
    await pageManager.getCartPage().clickCheckoutButton();
    await pageManager.getCheckoutPage().fillInformationForm(PersonalInfo.firstName, PersonalInfo.lastName, PersonalInfo.postalCode);
    await pageManager.getCheckoutPage().clickContinueButton();
    await pageManager.getOverviewPage().clickFinishButton();
    await pageManager.getConfirmationPage().verifyConfirmationMessage(Messages.confirmationMessage);
});