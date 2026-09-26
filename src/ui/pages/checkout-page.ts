import { type Page, type Locator } from '@playwright/test';


export class CheckoutPage {

    //Locators
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly postalCodeInput: Locator;
    private readonly continueButton: Locator;

    //Variables 
    private readonly page: Page;
    private readonly checkoutUrl = '/checkout-step-one.html';

    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
        this.postalCodeInput = page.getByRole('textbox', { name: 'Postal Code' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    //Actions
    async fillInformationForm(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

}