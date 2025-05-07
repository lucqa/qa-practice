import { type Page, type Locator } from '@playwright/test'

export class AuthEcommerce {

    readonly page: Page // Mandatory

    readonly inputEmail: Locator // Input for Email
    readonly inputPassword: Locator // Input for Passsword
    readonly buttonSubmit: Locator // Submit Button
    readonly containerLoginShop: Locator // Login Shop Container

    constructor(page: Page) {

        this.page = page // Mandatory

        this.inputEmail = page.getByRole('textbox', { name: 'Email' })
        // Or locator('//*[@id="email"]')

        this.inputPassword = page.getByRole('textbox', { name: 'Password' })
        // Or locator('//*[@id="password"]')

        this.buttonSubmit = page.getByRole('button', { name: 'Submit' })
        // Or locator('//*[@id="submitLoginBtn"]')

        this.containerLoginShop = page.locator('//*[@id="loginSection"]')
        // Login Shop Container

    }

    async LoginForm(email: string, password: string) {

        // Fill in email
        await this.inputEmail.fill(email)

        // Fill in password
        await this.inputPassword.fill(password)

    }
}