import { type Page, type Locator, expect } from '@playwright/test';

export class ConfirmationPage {
    //Locators 
    private readonly confirmationMessage: Locator;

    //Variables
    private readonly page: Page;
    private readonly confirmationUrl = '/checkout-complete.html';

    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.confirmationMessage = page.getByRole('heading');
    }

    //Actions

    //Verifications
    async verifyConfirmationMessage(expectedMessage: string) {
        await expect(this.confirmationMessage).toHaveText(expectedMessage);
    }
}