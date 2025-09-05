import { test, expect } from "my-test"

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
        await GenericMethods.click_On(authEcommerce_elements.proceedToCheckout)

    })

    test('Check Shipping Details', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Assertion Shipping Details
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.shippingDetailsContainer)
        await GenericMethods.assertion_TextToBePresentInElement(authEcommerce_elements.shippingDetailsContainer, 'Shipping Details')    

        // Assertion Phone
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.phoneNumberLabel)
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.phoneNumberInput)

        // Assertion Street
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.streetFormLabel)
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.streetFormInput)

        // Assertion City
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.cityFormLabel)
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.cityFormInput)

        // Assertion Country()
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.countryFormLabel)
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.countryFormSelect)

        // Assertion Submit Order
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.submitOrderButton)
    })

    test('Complete an Order: Phone Number is Mandatory', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Fill in Street
        await GenericMethods.fill(authEcommerce_elements.streetFormInput, authEcommerce_elements.placeholderShippingDetails.street)

        // Fill in City
        await GenericMethods.fill(authEcommerce_elements.cityFormInput, authEcommerce_elements.placeholderShippingDetails.city)

        // Select in Country
        await GenericMethods.selectOptionByValue(authEcommerce_elements.countryFormSelect, authEcommerce_elements.placeholderShippingDetails.country)

        // Click Submit Order
        await GenericMethods.click_On(authEcommerce_elements.submitOrderButton)

        // Dropdown must change style
        await GenericMethods.assertion_AttributeToBe(authEcommerce_elements.countryFormSelect, 'style', 'color: red;')

    })

    test('Complete an Order: Street is Mandatory', async ({ authEcommerce_elements }) => {

        // Fill in Phone Number
        await authEcommerce_elements.phoneNumberInput.fill(authEcommerce_elements.placeholderShippingDetails.phone)

        // Fill in City
        await authEcommerce_elements.cityFormInput.fill(authEcommerce_elements.placeholderShippingDetails.city)

        // Select in Country
        await authEcommerce_elements.countryFormSelect.selectOption(authEcommerce_elements.placeholderShippingDetails.country)

        // Click Submit Order
        await authEcommerce_elements.submitOrderButton.click()

        // Dropdown must change style
        await expect(authEcommerce_elements.countryFormSelect).toHaveAttribute('style', 'color: red;')

    })

    test('Complete an Order: City is Mandatory', async ({ page, authEcommerce_elements }) => {

        // Fill in Street
        await authEcommerce_elements.streetFormInput.fill(authEcommerce_elements.placeholderShippingDetails.street)

        // Fill in Phoe Number
        await authEcommerce_elements.phoneNumberInput.fill(authEcommerce_elements.placeholderShippingDetails.phone)

        // Select in Country
        await authEcommerce_elements.countryFormSelect.selectOption(authEcommerce_elements.placeholderShippingDetails.country)

        // Click Submit Order
        await authEcommerce_elements.submitOrderButton.click()

        // Dropdown must change style
        await expect(authEcommerce_elements.countryFormSelect).toHaveAttribute('style', 'color: red;')

    })
    test('Complete an Order: Country is Mandatory', async ({ page, authEcommerce_elements }) => {

        // Fill in Phnoe Number
        await authEcommerce_elements.phoneNumberInput.fill(authEcommerce_elements.placeholderShippingDetails.phone)

        // Fill in Street
        await authEcommerce_elements.streetFormInput.fill(authEcommerce_elements.placeholderShippingDetails.street)

        // Fill in City
        await authEcommerce_elements.cityFormInput.fill(authEcommerce_elements.placeholderShippingDetails.city)

        // Click Submit Order
        await authEcommerce_elements.submitOrderButton.click()

        // Dropdown must change style
        await expect(authEcommerce_elements.countryFormSelect).toHaveAttribute('style', 'color: red;')

    })

    test('Complete an Order: All Fields Fullfiled', async ({ page, authEcommerce_elements }) => {

        // Fill in Phnoe Number
        await authEcommerce_elements.phoneNumberInput.fill(authEcommerce_elements.placeholderShippingDetails.phone)

        // Fill in Street
        await authEcommerce_elements.streetFormInput.fill(authEcommerce_elements.placeholderShippingDetails.street)

        // Fill in City
        await authEcommerce_elements.cityFormInput.fill(authEcommerce_elements.placeholderShippingDetails.city)

        // Select in Country
        await authEcommerce_elements.countryFormSelect.selectOption(authEcommerce_elements.placeholderShippingDetails.country)

        // Click Submit Order
        await authEcommerce_elements.submitOrderButton.click()

        // Expect confirmation message
        await expect.soft(page.locator('//*[@id="message"]')).toBeVisible()
        await expect.soft(page.locator('//*[@id="message"]')).toHaveText(authEcommerce_elements.placeholderShippingDetails.confirmationMessage)

    })
})