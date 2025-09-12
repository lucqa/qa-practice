import { test } from "my-test"

test.describe("Ecommerce: Authentication Tests", () => {

    test.beforeEach('Precondition: Call E-commerce endpoint', async ({ page }) => {

        // Calling Page Name
        const pageName = 'auth_ecommerce'

        // Loading Page
        await page.goto(pageName)

    })

    test("Access Login Page and Verify Elements", async ({ authEcommerce_elements, GenericMethods }) => {

        // Test Data
        const expectedTextInShopContainer = 'Login - Shop'

        // Assertion URL ends wit 'auth_ecommerce'
        await GenericMethods.assertion_UrlToContain('auth_ecommerce')

        // Assertion Login Shop Container exists in DOM
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.containerLoginShop)

        // Assertion String 'Login - Shop' exists in Shop Container
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.containerLoginShop, expectedTextInShopContainer)

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
        const expectedLogOutText = 'Log Out'
        const expectedITEMHeader = 'ITEM'
        const expectedPRICEHeader = 'PRICE'
        const expectedQUANTITYHeader = 'QUANTITY'
        const expectedTotalHeader = 'Total'

        // Filling Login Form
        await authEcommerce_actions.SubmitLoginForm(email, password)

        // Assertion Logout link is displayed
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.linkLogout)

        // Assertion Logout link contains the text Log Out
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.linkLogout, expectedLogOutText)

        // Assertion Header Title
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.titleHeaderCart, expectedITEMHeader)

        // Assertion Header Price'
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.priceHeaderCart, expectedPRICEHeader)

        // Assertion Header Quantity
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.quantityHeaderCart, expectedQUANTITYHeader)

        // Assertion Header Total
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.totalHeaderCart, expectedTotalHeader)

    })

    test('Authenticate with Invalid Email', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Calling Test Data
        const password = process.env.CREDENCIAL_PASSWORD as string
        const errorMessageText = "Bad credentials! Please try again! Make sure that you've registered."
        const unregisteredEmail = '123@123.com'

        // Filling Login Form
        await authEcommerce_actions.SubmitLoginForm(unregisteredEmail, password)

        // Assertion Logout link is NOT displayed
        await GenericMethods.assertion_ElementToNotBeVisible(authEcommerce_elements.linkLogout)

        // Assertion Red Alert container is visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.containerLoginAlert)

        // Assertion Red Alert Container contains Bad Credentials message 
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.containerLoginAlert, errorMessageText)

    })

    test('Authenticate with Invalid Password', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Calling Test Data
        const email = process.env.CREDENCIAL_EMAIL as string
        const wrongPassword = '1234567890'
        const errorMessageText = "Bad credentials! Please try again! Make sure that you've registered."

        // Filling Login Form
        await authEcommerce_actions.SubmitLoginForm(email, wrongPassword)

        // Assertion Logout link is NOT displayed
        await GenericMethods.assertion_ElementToNotBeVisible(authEcommerce_elements.linkLogout)

        // Assertion Red Alert container is visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.containerLoginAlert)

        // Assertion Red Alert Container contains Bad Credentials message 
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.containerLoginAlert, errorMessageText)

    })

    test('Authenticate Without Credentials', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Calling Test Data
        const errorMessageText = "Bad credentials! Please try again! Make sure that you've registered."

        // Filling Login Form
        await authEcommerce_actions.SubmitLoginForm('', '')

        // Assertion Logout link is NOT displayed
        await GenericMethods.assertion_ElementToNotBeVisible(authEcommerce_elements.linkLogout)

        // Assertion Red Alert container is visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.containerLoginAlert)

        // Assertion Red Alert Container contains Bad Credentials message 
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.containerLoginAlert, errorMessageText)

    })

})

