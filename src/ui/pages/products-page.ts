import { type Page, type Locator, expect } from '@playwright/test';


export class ProductsPage {
    //Locators for the products page
    private readonly productComponent: Locator;
    private readonly addToCartButton: Locator;
    private readonly cartIcon: Locator;
    private readonly cartButton: Locator;

    //Variables for the products page
    private readonly page: Page;
    private readonly productsUrl = '/inventory.html';

    //Constructor for the products page
    constructor(page: Page) {
        this.page = page;
        this.productComponent = page.locator('.inventory_item_description')
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.cartIcon = page.locator('[data-test="shopping-cart-badge"]');
        this.cartButton = page.getByRole('button', { name: 'Cart,' });
    }

    //Actions for the products page
    async navigateToProductsPage() {
        await this.page.goto(this.productsUrl);
    }
    async addToCart(productName: string) {
        await this.productComponent.filter({ hasText: productName }).locator(this.addToCartButton).click();
    }

    async clickCartButton() {
        await this.cartButton.click();
    }


    //Verification methods for the products page
    async verifyCartIconCount(expectedCount: number) {
        await expect(this.cartIcon).toHaveText(expectedCount.toString());
    }


}