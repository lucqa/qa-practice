import { test, expect } from "@playwright/test"
import { AuthEcommerce } from "@Pages/auth-ecommerce"

test.describe("Basic Authentication Tests", () => {

    test("Accessing Page and Verify Elements", async ({ page }) => {

        // Calling Resources
        const authEcommerce: AuthEcommerce = new AuthEcommerce(page)

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

    test('Authentication Attempt with Valid Credentials', async ({ page }) => {

        // Calling Resources
        const authEcommerce: AuthEcommerce = new AuthEcommerce(page)

        // Calling Test Data
        const email = process.env.CREDENCIAL_EMAIL as string
        const password = process.env.CREDENCIAL_PASSWORD as string

        // Loading Page
        await page.goto('auth_ecommerce')

        // Filling Login Form
        await authEcommerce.LoginForm(email, password)

        // Click Submit Button
        await authEcommerce.buttonSubmit.click()

        // Assertion Logout link is displayed
        await expect(authEcommerce.linkLogout).toBeVisible()

        // Assertion Logout link contains the text Log Out
        await expect(authEcommerce.linkLogout).toContainText('Log Out')

    })

    test('Authentication Attempt with Invalid Email', async ({ page }) => {

        // Calling Resources
        const authEcommerce: AuthEcommerce = new AuthEcommerce(page)

        // Calling Test Data
        const password = process.env.CREDENCIAL_PASSWORD as string

        // Loading Page
        await page.goto('auth_ecommerce')

        // Filling Login Form
        await authEcommerce.LoginForm('123@123.com', password)

        // Click Submit Button
        await authEcommerce.buttonSubmit.click()

        // Assertion Logout link is NOT displayed
        await expect(authEcommerce.linkLogout).not.toBeVisible()

        // Assertion Red Alert container is visible
        await expect(authEcommerce.containerLoginAlert).toBeVisible()

        // Assertion Red Alert Container contains Bad Credentials message 
        await expect(authEcommerce.containerLoginAlert).toContainText("Bad credentials! Please try again! Make sure that you've registered.")

    })

    test('Authentication Attempt with Invalid Password', async ({ page }) => {

        // Calling Resources
        const authEcommerce: AuthEcommerce = new AuthEcommerce(page)

        // Calling Test Data
        const email = process.env.CREDENCIAL_EMAIL as string

        // Loading Page
        await page.goto('auth_ecommerce')

        // Filling Login Form
        await authEcommerce.LoginForm(email, '1234567890')

        // Click Submit Button
        await authEcommerce.buttonSubmit.click()

        // Assertion Logout link is NOT displayed
        await expect(authEcommerce.linkLogout).not.toBeVisible()

        // Assertion Red Alert container is visible
        await expect(authEcommerce.containerLoginAlert).toBeVisible()

        // Assertion Red Alert Container contains Bad Credentials message 
        await expect(authEcommerce.containerLoginAlert).toContainText("Bad credentials! Please try again! Make sure that you've registered.")

    })

    test('Authentication Attempt Without Credentials', async ({ page }) => {

        // Calling Resources
        const authEcommerce: AuthEcommerce = new AuthEcommerce(page)

        // Loading Page
        await page.goto('auth_ecommerce')

        // Filling Login Form
        await authEcommerce.LoginForm('', '')

        // Click Submit Button
        await authEcommerce.buttonSubmit.click()

        // Assertion Logout link is NOT displayed
        await expect(authEcommerce.linkLogout).not.toBeVisible()

        // Assertion Red Alert container is visible
        await expect(authEcommerce.containerLoginAlert).toBeVisible()

        // Assertion Red Alert Container contains Bad Credentials message 
        await expect(authEcommerce.containerLoginAlert).toContainText("Bad credentials! Please try again! Make sure that you've registered.")

    })

})

test.describe("Basic Ecommerce Tests", () => {

    test('Add an item to cart', async ({ page }) => {

        // Calling Resources
        const authEcommerce: AuthEcommerce = new AuthEcommerce(page)

        // Calling Page and Logging In
        await authEcommerce.CallPageAndLogin()

        // Storing first products Data to later assertion
        const productName_0 = await authEcommerce.nameAnyProduct.nth(0).textContent() // Name
        const productPrice_0 = await authEcommerce.priceAnyProduct.nth(0).textContent() // Price
        const productSrc_0 = await authEcommerce.srcAnyProduct.nth(0).getAttribute('src') // thumbnail

        // Adding first product to cart
        await authEcommerce.buttonAddToCartAnyProduct.nth(0).click()

    })




})