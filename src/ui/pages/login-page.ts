import { type Page, type Locator, expect } from '@playwright/test';
export class LoginPage {
    //Locators for the login page
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    //Variables for the login page
    private readonly page: Page;


    //Constructor for the login page class
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    //Actions for the login page
    async navigateToLoginPage() {
        await this.page.goto('/')
    }
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


    //Verification methods for the login page
    async verifyLoginSuccessful() {
        await expect(this.page).toHaveURL('/inventory.html');
    }


}

