import { test, expect } from "my-test"

test.describe("Ecommerce: Authentication Tests", () => {

    test.beforeEach('Precondition: Call E-commerce endpoint', async ({ page }) => {

        // Loading Page
        await page.goto('auth_ecommerce')

    })

    test("Access Login Page and Verify Elements", async ({ authEcommerce, page }) => {

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

    test('Authenticate with Valid Credentials', async ({ authEcommerce }) => {

        // Calling Test Data
        const email = process.env.CREDENCIAL_EMAIL as string
        const password = process.env.CREDENCIAL_PASSWORD as string

        // Filling Login Form
        await authEcommerce.SubmitLoginForm(email, password)

        // Assertion Logout link is displayed
        await expect(authEcommerce.linkLogout).toBeVisible()

        // Assertion Logout link contains the text Log Out
        await expect(authEcommerce.linkLogout).toContainText('Log Out')

        // Assertion Header Title
        await expect(authEcommerce.titleHeaderCart).toContainText('ITEM')

        // Assertion Header Price
        await expect(authEcommerce.priceHeaderCart).toContainText('PRICE')

        // Assertion Header Quantity
        await expect(authEcommerce.quantityHeaderCart).toContainText('QUANTITY')

    })

    test('Authenticate with Invalid Email', async ({ authEcommerce }) => {

        // Calling Test Data
        const password = process.env.CREDENCIAL_PASSWORD as string

        // Filling Login Form
        await authEcommerce.SubmitLoginForm('123@123.com', password)

        // Assertion Logout link is NOT displayed
        await expect(authEcommerce.linkLogout).not.toBeVisible()

        // Assertion Red Alert container is visible
        await expect(authEcommerce.containerLoginAlert).toBeVisible()

        // Assertion Red Alert Container contains Bad Credentials message 
        await expect(authEcommerce.containerLoginAlert).toContainText("Bad credentials! Please try again! Make sure that you've registered.")

    })

    test('Authenticate with Invalid Password', async ({ authEcommerce }) => {

        // Calling Test Data
        const email = process.env.CREDENCIAL_EMAIL as string

        // Filling Login Form
        await authEcommerce.SubmitLoginForm(email, '1234567890')

        // Assertion Logout link is NOT displayed
        await expect(authEcommerce.linkLogout).not.toBeVisible()

        // Assertion Red Alert container is visible
        await expect(authEcommerce.containerLoginAlert).toBeVisible()

        // Assertion Red Alert Container contains Bad Credentials message 
        await expect(authEcommerce.containerLoginAlert).toContainText("Bad credentials! Please try again! Make sure that you've registered.")

    })

    test('Authenticate Without Credentials', async ({ authEcommerce }) => {

        // Filling Login Form
        await authEcommerce.SubmitLoginForm('', '')

        // Assertion Logout link is NOT displayed
        await expect(authEcommerce.linkLogout).not.toBeVisible()

        // Assertion Red Alert container is visible
        await expect(authEcommerce.containerLoginAlert).toBeVisible()

        // Assertion Red Alert Container contains Bad Credentials message 
        await expect(authEcommerce.containerLoginAlert).toContainText("Bad credentials! Please try again! Make sure that you've registered.")

    })

})

