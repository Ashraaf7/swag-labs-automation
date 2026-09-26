import { test } from '@playwright/test';
import { PageManager } from '../pages/page-manager/page-manager';
import LoginData from '../test-data/login-data.json';
import ProductsData from '../test-data/products-data.json';


let pageManager: PageManager;

test.beforeEach(async ({ page }) => {
    pageManager = new PageManager(page);
    await pageManager.getLoginPage().navigateToLoginPage();
    await pageManager.getLoginPage().login(LoginData.valid.username, LoginData.valid.password);
});

test('verify product in cart', async ({ page }) => {
    await pageManager.getProductsPage().addToCart(ProductsData.productName1);
    await pageManager.getProductsPage().clickCartButton();
    await pageManager.getCartPage().verifyProductName(ProductsData.productName1);
});
