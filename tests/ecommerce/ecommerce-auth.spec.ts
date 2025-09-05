import { GenericMethods } from "@Actions/GenericMethods"
import { test, expect } from "my-test"

test.describe("Ecommerce: Authentication Tests", () => {

    test.beforeEach('Precondition: Call E-commerce endpoint', async ({ page }) => {

        // Loading Page
        await page.goto('auth_ecommerce')

    })

    test("Access Login Page and Verify Elements", async ({ authEcommerce_elements, GenericMethods }) => {

        // Assertion URL ends wit 'auth_ecommerce'
        await GenericMethods.assertion_UrlToContain('auth_ecommerce')

        // Assertion Login Shop Container exists in DOM
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.containerLoginShop)

        // Assertion String 'Login - Shop' exists in Shop Container
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.containerLoginShop, 'Login - Shop')

        // Assertion Email Form is Visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.inputEmail)

        // Assertion Password Form is Visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.inputPassword)

        // Assertion Submit Button is Visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.buttonSubmit)

    })

    test('Authenticate with Valid Credentials', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Calling Test Data
        const email = process.env.CREDENCIAL_EMAIL as string
        const password = process.env.CREDENCIAL_PASSWORD as string

        // Filling Login Form
        await authEcommerce_actions.SubmitLoginForm(email, password)

        // Assertion Logout link is displayed
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.linkLogout)

        // Assertion Logout link contains the text Log Out
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.linkLogout, 'Log Out')

        // Assertion Header Title
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.titleHeaderCart, 'ITEM')

        // Assertion Header Price'
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.priceHeaderCart, 'PRICE')

        // Assertion Header Quantity
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.quantityHeaderCart, 'QUANTITY')

        // Assertion Header Total
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.totalHeaderCart, 'Total')

    })

    test('Authenticate with Invalid Email', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Calling Test Data
        const password = process.env.CREDENCIAL_PASSWORD as string

        // Filling Login Form
        await authEcommerce_actions.SubmitLoginForm('123@123.com', password)

        // Assertion Logout link is NOT displayed
        await GenericMethods.assertion_ElementToNotBeVisible(authEcommerce_elements.linkLogout)

        // Assertion Red Alert container is visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.containerLoginAlert)

        // Assertion Red Alert Container contains Bad Credentials message 
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.containerLoginAlert, "Bad credentials! Please try again! Make sure that you've registered.")

    })

    test('Authenticate with Invalid Password', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Calling Test Data
        const email = process.env.CREDENCIAL_EMAIL as string

        // Filling Login Form
        await authEcommerce_actions.SubmitLoginForm(email, '1234567890')

        // Assertion Logout link is NOT displayed
        await GenericMethods.assertion_ElementToNotBeVisible(authEcommerce_elements.linkLogout)

        // Assertion Red Alert container is visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.containerLoginAlert)

        // Assertion Red Alert Container contains Bad Credentials message 
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.containerLoginAlert, "Bad credentials! Please try again! Make sure that you've registered.")

    })

    test('Authenticate Without Credentials', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Filling Login Form
        await authEcommerce_actions.SubmitLoginForm('', '')

        // Assertion Logout link is NOT displayed
        await GenericMethods.assertion_ElementToNotBeVisible(authEcommerce_elements.linkLogout)

        // Assertion Red Alert container is visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.containerLoginAlert)

        // Assertion Red Alert Container contains Bad Credentials message 
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.containerLoginAlert, "Bad credentials! Please try again! Make sure that you've registered.")

    })

})

