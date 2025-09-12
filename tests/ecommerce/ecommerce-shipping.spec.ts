import { test } from "my-test"

test.describe("commerce: Shipping Form Tests", () => {

    test.beforeEach('Precondition: User must be logged and Cart Must Be Created', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Calling Page and Logging In
        await authEcommerce_actions.CallPageAndLogin()

        // Adding first product to cart (nth=0)
        await authEcommerce_actions.AddProductToShoppingCartByPosition(0)

        // Adding 2nd product to cart (nth=1)
        await authEcommerce_actions.AddProductToShoppingCartByPosition(1)

        // Adding 3rd product to cart (nth=2)
        await authEcommerce_actions.AddProductToShoppingCartByPosition(2)

        // Click Proceed to Checkout
        await GenericMethods.clickOn(authEcommerce_elements.proceedToCheckout)

    })

    test('Check Shipping Details', async ({ authEcommerce_elements, GenericMethods }) => {

        // Test Data
        const expectedTextShippingDetails = 'Shipping Details'

        // Assertion Shipping Details is visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.shippingDetailsContainer)

        // Assertion Shipping Details text
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.shippingDetailsContainer, expectedTextShippingDetails)

        // Assertion Phone Label and Input are Visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.phoneNumberLabel)
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.phoneNumberInput)

        // Assertion Street Label and Input are Visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.streetFormLabel)
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.streetFormInput)

        // Assertion City Label and Input are Visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.cityFormLabel)
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.cityFormInput)

        // Assertion Country Label and Select are Visible
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.countryFormLabel)
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.countryFormSelect)

        // Assertion Submit Order
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.submitOrderButton)
    })

    test('Complete an Order: Phone Number is Mandatory', async ({ authEcommerce_elements, GenericMethods }) => {

        // Test Data, expected attribute and value
        const expectedAttribute = 'style'
        const expectedAttributeValue = 'color: red;'

        // Fill in Street
        await GenericMethods.fill(authEcommerce_elements.streetFormInput, authEcommerce_elements.placeholderShippingDetails.street)

        // Fill in City
        await GenericMethods.fill(authEcommerce_elements.cityFormInput, authEcommerce_elements.placeholderShippingDetails.city)

        // Select in Country
        await GenericMethods.selectOptionByValue(authEcommerce_elements.countryFormSelect, authEcommerce_elements.placeholderShippingDetails.country)

        // Click Submit Order
        await GenericMethods.clickOn(authEcommerce_elements.submitOrderButton)

        // Dropdown must change style
        await GenericMethods.assertion_AttributeToBe(authEcommerce_elements.countryFormSelect, expectedAttribute, expectedAttributeValue)

    })

    test('Complete an Order: Street is Mandatory', async ({ authEcommerce_elements, GenericMethods }) => {

        // Test Data, expected attribute and value
        const expectedAttribute = 'style'
        const expectedAttributeValue = 'color: red;'

        // Fill in Phone Number
        await GenericMethods.fill(authEcommerce_elements.phoneNumberInput, authEcommerce_elements.placeholderShippingDetails.phone)

        // Fill in City
        await GenericMethods.fill(authEcommerce_elements.cityFormInput, authEcommerce_elements.placeholderShippingDetails.city)

        // Select in Country
        await GenericMethods.selectOptionByValue(authEcommerce_elements.countryFormSelect, authEcommerce_elements.placeholderShippingDetails.country)

        // Click Submit Order
        await GenericMethods.clickOn(authEcommerce_elements.submitOrderButton)

        // Dropdown must change style
        await GenericMethods.assertion_AttributeToBe(authEcommerce_elements.countryFormSelect, expectedAttribute, expectedAttributeValue)

    })

    test('Complete an Order: City is Mandatory', async ({ GenericMethods, authEcommerce_elements }) => {

        // Test Data, expected attribute and value
        const expectedAttribute = 'style'
        const expectedAttributeValue = 'color: red;'

        // Fill in Street
        await GenericMethods.fill(authEcommerce_elements.streetFormInput, authEcommerce_elements.placeholderShippingDetails.street)

        // Fill in Phoe Number
        await GenericMethods.fill(authEcommerce_elements.phoneNumberInput, authEcommerce_elements.placeholderShippingDetails.phone)

        // Select in Country
        await GenericMethods.selectOptionByValue(authEcommerce_elements.countryFormSelect, authEcommerce_elements.placeholderShippingDetails.country)

        // Click Submit Order
        await GenericMethods.clickOn(authEcommerce_elements.submitOrderButton)

        // Dropdown must change style
        await GenericMethods.assertion_AttributeToBe(authEcommerce_elements.countryFormSelect, expectedAttribute, expectedAttributeValue)

    })

    test('Complete an Order: Country is Mandatory', async ({ GenericMethods, authEcommerce_elements }) => {

        // Test Data, expected attribute and value
        const expectedAttribute = 'style'
        const expectedAttributeValue = 'color: red;'

        // Fill in Phnoe Number
        await GenericMethods.fill(authEcommerce_elements.phoneNumberInput, authEcommerce_elements.placeholderShippingDetails.phone)

        // Fill in Street
        await GenericMethods.fill(authEcommerce_elements.streetFormInput, authEcommerce_elements.placeholderShippingDetails.street)

        // Fill in City
        await GenericMethods.fill(authEcommerce_elements.cityFormInput, authEcommerce_elements.placeholderShippingDetails.city)

        // Click Submit Order
        await GenericMethods.clickOn(authEcommerce_elements.submitOrderButton)

        // Dropdown must change style
        await GenericMethods.assertion_AttributeToBe(authEcommerce_elements.countryFormSelect, expectedAttribute, expectedAttributeValue)

    })

    test('Complete an Order: All Fields Fullfiled', async ({ GenericMethods, authEcommerce_elements }) => {

        // Fill in Phnoe Number
        await GenericMethods.fill(authEcommerce_elements.phoneNumberInput, authEcommerce_elements.placeholderShippingDetails.phone)

        // Fill in Street
        await GenericMethods.fill(authEcommerce_elements.streetFormInput, authEcommerce_elements.placeholderShippingDetails.street)

        // Fill in City
        await GenericMethods.fill(authEcommerce_elements.cityFormInput, authEcommerce_elements.placeholderShippingDetails.city)

        // Select in Country
        await GenericMethods.selectOptionByValue(authEcommerce_elements.countryFormSelect, authEcommerce_elements.placeholderShippingDetails.country)

        // Click Submit Order
        await GenericMethods.clickOn(authEcommerce_elements.submitOrderButton)

        // Expect confirmation message
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.confirmationMessage)

        // Expect confirmation message text
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.confirmationMessage, authEcommerce_elements.placeholderShippingDetails.confirmationMessage)

    })
})