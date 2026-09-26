import { type Page, type Locator, expect } from '@playwright/test';


export class LogoutPage {
    //Locators
    private readonly burgerMenuButton: Locator;
    private readonly logoutButton: Locator;

    //Variables
    private readonly page: Page;

    //Constructor

    constructor(page: Page) {
        this.page = page;
        this.burgerMenuButton = page.getByRole('button', { name: 'Open Menu' });
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
    }
    //Actions
    async clickBurgerMenuButton() {
        await this.burgerMenuButton.click();
    }

    async clickLogoutButton() {
        await this.logoutButton.click();
    }

    //Assertions
    async verifyThatTheUserIsLoggedOut() {
        await expect(this.page).toHaveURL('/');
    }
}