import { type Page, type Locator } from '@playwright/test'

export class AuthEcommerce {

    readonly page: Page // Mandatory

    // Authentication
    readonly inputEmail: Locator // Input for Email
    readonly inputPassword: Locator // Input for Passsword
    readonly buttonSubmit: Locator // Submit Button
    readonly containerLoginShop: Locator // Login Shop Container
    readonly linkLogout: Locator // Logout link
    readonly containerLoginAlert: Locator // Alert container for wrong login credentials

    // Product Container
    readonly containerAnyProduct: Locator // Locator to find any nth-product
    readonly nameAnyProduct: Locator // Locator to find any nth-product name
    readonly priceAnyProduct: Locator // Locator to find any nth-product price
    readonly buttonAddToCartAnyProduct: Locator // Locator to find any nth-product add to cart button
    readonly srcAnyProduct: Locator // Locator to find any products thumbnail

    // Shopping Cart Container

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

        this.linkLogout = page.locator('//*[@id="logout"]')
        // Link to Logout

        this.containerLoginAlert = page.locator('//*[@class="alert alert-danger"]')
        // Red Alert container for wrong credentials

        this.containerAnyProduct = page.locator('//*[@class="shop-item"]')
        // Container for Products to use with nth 0-4

        this.nameAnyProduct = page.locator('//*[@class="shop-item-title"]')
        // Any Products name to use with nth 0-4

        this.priceAnyProduct = page.locator('//*[@class="shop-item-price"]')
        // Any Products price to use with nth 0-4

        this.buttonAddToCartAnyProduct = page.getByRole('button', { name: 'ADD TO CART'})
        // Any Products Addto Cart button to use with nth 0-4

        this.srcAnyProduct = page.locator('//*[@class="shop-item-image"]')
    }

    async LoginForm(email: string, password: string) {

        // Fill in email
        await this.inputEmail.fill(email)

        // Fill in password
        await this.inputPassword.fill(password)

    }

    async CallPageAndLogin() {

        // Calling Data
        const email = process.env.CREDENCIAL_EMAIL as string
        const password = process.env.CREDENCIAL_PASSWORD as string

        // Loading Ecommerce Page
        await this.page.goto('auth_ecommerce')

        // Calling LoginForm
        await this.LoginForm(email, password)

        // Click Submit Button
        await this.buttonSubmit.click()

    }
}