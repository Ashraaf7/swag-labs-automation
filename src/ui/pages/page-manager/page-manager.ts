import { type Page } from '@playwright/test';
import { LoginPage } from '../login-page';
import { ProductsPage } from '../products-page';
import { CartPage } from '../cart-page';
import { CheckoutPage } from '../checkout-page';
import { OverviewPage } from '../overview-page';
import { ConfirmationPage } from '../confirmation-page';
import { LogoutPage } from '../logout-page';

export class PageManager {
    private readonly page: Page;
    private readonly loginPage: LoginPage;
    private readonly productsPage: ProductsPage;
    private readonly cartPage: CartPage;
    private readonly checkoutPage: CheckoutPage;
    private readonly overviewPage: OverviewPage;
    private readonly confirmationPage: ConfirmationPage;
    private readonly logoutPage: LogoutPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.productsPage = new ProductsPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.overviewPage = new OverviewPage(page);
        this.confirmationPage = new ConfirmationPage(page);
        this.logoutPage = new LogoutPage(page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getProductsPage() {
        return this.productsPage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getCheckoutPage() {
        return this.checkoutPage;
    }

    getOverviewPage() {
        return this.overviewPage;
    }

    getConfirmationPage() {
        return this.confirmationPage;
    }

    getLogoutPage() {
        return this.logoutPage;
    }
}