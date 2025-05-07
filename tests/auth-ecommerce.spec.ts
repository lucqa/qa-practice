import { test, expect } from "@playwright/test"
import { AuthEcommerce } from "../pages/auth-ecommerce"

test.describe("Authentication Page Tests", () => {

    test("Loading the site", async ({ page }) => { 

        // Calling Resources
        const authEcommerce: AuthEcommerce = new AuthEcommerce (page)

        // Loading Page
        await page.goto('auth_ecommerce')

        // Assertion URL ends wit 'auth_ecommerce'
        await expect(page).toHaveURL(/auth_ecommerce$/)

        // Assertion Login Shop Container exists in DOM
        await expect(authEcommerce.containerLoginShop).toBeVisible()

        // Assertion String 'Login - Shop' exists in Shop Container
        await expect(authEcommerce.containerLoginShop).toContainText('Login - Shop')

        // Assertion Email Form is Visible
        await expect(authEcommerce.inputEmail).toBeVisible()

        // Assertion Password Form is Visible
        await expect(authEcommerce.inputPassword).toBeVisible()

        // Assertion Submit button is visible
        await expect(authEcommerce.buttonSubmit).toBeVisible()

    })
    test('Authentication with Valid Credentials', async ({ page }) => { 

        // Calling Resources
        const authEcommerce: AuthEcommerce = new AuthEcommerce (page)

        // Calling Test Data
        const email = process.env.CREDENCIAL_EMAIL as string
        const password = process.env.CREDENCIAL_PASSWORD as string

        // Loading Page
        await page.goto('auth_ecommerce')

        // Filling Login Form
        await authEcommerce.LoginForm(email, password)

        // Click Submit Button
        await authEcommerce.buttonSubmit.click()

    })

})
