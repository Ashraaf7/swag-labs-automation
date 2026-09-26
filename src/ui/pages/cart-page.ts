import { type Page, type Locator, expect } from '@playwright/test';


export class CartPage {
    //Locators
    private readonly productName: Locator;
    private readonly checkoutButton: Locator;

    //Variables for the cart page
    private readonly page: Page;
    private readonly cartUrl = '/cart.html';


    //Constructor for the cart page
    constructor(page: Page) {
        this.page = page;
        this.productName = page.locator('.cart_list div[data-test="inventory-item-name"]');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }

    //Actions for the cart page
    async navigateToCartPage() {
        await this.page.goto(this.cartUrl);
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }

    //Verification methods for the cart page
    async verifyProductName(expectedName: string) {
        await expect(this.productName).toHaveText(expectedName);
    }

}