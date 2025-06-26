import { test, expect } from "my-test"

test.describe("commerce: Shipping Form Tests", () => {

    test.beforeEach('Precondition: User must be logged and Cart Must Be Created', async ({ authEcommerce }) => {

        // Calling Page and Logging In
        await authEcommerce.CallPageAndLogin()

        // Adding first product to cart (nth=0)
        await authEcommerce.AddProductToShoppingCartByPosition(0)

        // Adding 2nd product to cart (nth=1)
        await authEcommerce.AddProductToShoppingCartByPosition(1)

        // Adding 3rd product to cart (nth=2)
        await authEcommerce.AddProductToShoppingCartByPosition(2)

        // Click Proceed to Checkout
        await authEcommerce.proceedToCheckout.click()

    })

    test('Check Shipping Details', async ({ authEcommerce }) => {

        // Assertion Shipping Details
        await expect(authEcommerce.shippingDetailsContainer).toBeVisible()
        await expect(authEcommerce.shippingDetailsContainer).toContainText('Shipping Details')

        // Assertion Phone
        await expect(authEcommerce.phoneNumberLabel).toBeVisible()
        await expect(authEcommerce.phoneNumberInput).toBeVisible()

        // Assertion Street
        await expect(authEcommerce.streetFormLabel).toBeVisible()
        await expect(authEcommerce.streetFormInput).toBeVisible()

        // Assertion City
        await expect(authEcommerce.cityFormLabel).toBeVisible()
        await expect(authEcommerce.cityFormInput).toBeVisible()

        // Assertion Country
        await expect(authEcommerce.countryFormLabel).toBeVisible()
        await expect(authEcommerce.countryFormSelect).toBeVisible()

        // Assertion Submit Order
        await expect(authEcommerce.submitOrderButton).toBeVisible()
    })

    test('Complete an Order: Phone Number is Mandatory', async ({ authEcommerce }) => {

        // Fill in Street
        await authEcommerce.streetFormInput.fill(authEcommerce.placeholderShippingDetails.street)

        // Fill in City
        await authEcommerce.cityFormInput.fill(authEcommerce.placeholderShippingDetails.city)

        // Select in Country
        await authEcommerce.countryFormSelect.selectOption(authEcommerce.placeholderShippingDetails.country)

        // Click Submit Order
        await authEcommerce.submitOrderButton.click()

        // Dropdown must change style
        await expect(authEcommerce.countryFormSelect).toHaveAttribute('style', 'color: red;')

    })

    test('Complete an Order: Street is Mandatory', async ({ authEcommerce }) => {

        // Fill in Phone Number
        await authEcommerce.phoneNumberInput.fill(authEcommerce.placeholderShippingDetails.phone)

        // Fill in City
        await authEcommerce.cityFormInput.fill(authEcommerce.placeholderShippingDetails.city)

        // Select in Country
        await authEcommerce.countryFormSelect.selectOption(authEcommerce.placeholderShippingDetails.country)

        // Click Submit Order
        await authEcommerce.submitOrderButton.click()

        // Dropdown must change style
        await expect(authEcommerce.countryFormSelect).toHaveAttribute('style', 'color: red;')

    })

    test('Complete an Order: City is Mandatory', async ({ page, authEcommerce }) => {

        // Fill in Street
        await authEcommerce.streetFormInput.fill(authEcommerce.placeholderShippingDetails.street)

        // Fill in Phoe Number
        await authEcommerce.phoneNumberInput.fill(authEcommerce.placeholderShippingDetails.phone)

        // Select in Country
        await authEcommerce.countryFormSelect.selectOption(authEcommerce.placeholderShippingDetails.country)

        // Click Submit Order
        await authEcommerce.submitOrderButton.click()

        // Dropdown must change style
        await expect(authEcommerce.countryFormSelect).toHaveAttribute('style', 'color: red;')

    })
    test('Complete an Order: Country is Mandatory', async ({ page, authEcommerce }) => {

        // Fill in Phnoe Number
        await authEcommerce.phoneNumberInput.fill(authEcommerce.placeholderShippingDetails.phone)

        // Fill in Street
        await authEcommerce.streetFormInput.fill(authEcommerce.placeholderShippingDetails.street)

        // Fill in City
        await authEcommerce.cityFormInput.fill(authEcommerce.placeholderShippingDetails.city)

        // Click Submit Order
        await authEcommerce.submitOrderButton.click()

        // Dropdown must change style
        await expect(authEcommerce.countryFormSelect).toHaveAttribute('style', 'color: red;')

    })

    test('Complete an Order: All Fields Fullfiled', async ({ page, authEcommerce }) => {

        // Fill in Phnoe Number
        await authEcommerce.phoneNumberInput.fill(authEcommerce.placeholderShippingDetails.phone)

        // Fill in Street
        await authEcommerce.streetFormInput.fill(authEcommerce.placeholderShippingDetails.street)

        // Fill in City
        await authEcommerce.cityFormInput.fill(authEcommerce.placeholderShippingDetails.city)

        // Select in Country
        await authEcommerce.countryFormSelect.selectOption(authEcommerce.placeholderShippingDetails.country)

        // Click Submit Order
        await authEcommerce.submitOrderButton.click()

        // Expect confirmation message
        await expect.soft(page.locator('//*[@id="message"]')).toBeVisible()
        await expect.soft(page.locator('//*[@id="message"]')).toHaveText(authEcommerce.placeholderShippingDetails.confirmationMessage)

    })
})