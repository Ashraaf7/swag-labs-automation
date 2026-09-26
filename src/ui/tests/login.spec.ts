import { test } from '@playwright/test';
import { PageManager } from '../pages/page-manager/page-manager';
import loginData from '../test-data/login-data.json';

let pageManager: PageManager;
test.beforeEach(async ({ page }) => {
    pageManager = new PageManager(page);
    await pageManager.getLoginPage().navigateToLoginPage();
});

test('successful login', async ({ page }) => {
    await pageManager.getLoginPage().login(loginData.valid.username, loginData.valid.password);
    await pageManager.getLoginPage().verifyLoginSuccessful();
});