import { type Page, type Locator, expect } from '@playwright/test';

export class OverviewPage {

    //Locators
    private readonly productName: Locator;
    private readonly finishButton: Locator;

    //Variables for the cart page
    private readonly page: Page;
    private readonly overviewUrl = '/checkout-step-two.html';


    //Constructor for the overview page
    constructor(page: Page) {
        this.page = page;
        this.productName = page.locator('[data-test="inventory-item-name"]');
        this.finishButton = page.getByRole('button', { name: 'Finish' });
    }

    //Actions
    async clickFinishButton() {
        await this.finishButton.click();
    }

    //Assertions
    async verifyProductName(expectedName: string) {
        await expect(this.productName).toHaveText(expectedName);
    }

}
