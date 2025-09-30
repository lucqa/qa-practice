import { test, expect } from "my-test"

test.describe("Buttons and Checkboxes Tests", () => {

    test.beforeEach('Precondition: Navigate to Buttons/Checkboxes Page', async ({ page }) => {

        // Calling Page Name
        const pageName = 'checkboxes'

        // Loading Page
        await page.goto(pageName)

    })

    test('UI: Validate Checkboxes and Elements', async ({ Buttons_Elements, GenericMethods }) => {

        // Data
        const pageHeader = 'Checkboxes'
        const checkbox1Label = 'Check me out - 1'
        const checkbox2Label = 'Check me out - 2'
        const checkbox3Label = 'Check me out - 3'
        const resetButtonText = 'Reset'

        // Validating Page Header is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.titleHeaderButtons)

        // Validating Page Header Text
        await GenericMethods.assertion_TextToBePresentInElement(Buttons_Elements.titleHeaderButtons, pageHeader)

        // Validating Checkbox 1 is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.checkbox1)

        // Validating Checkbox 1 Label is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.checkbox1Label)

        // Validating Checkbox 1 Label Text
        await GenericMethods.assertion_TextToBePresentInElement(Buttons_Elements.checkbox1Label, checkbox1Label)

        // Validating Checkbox 1 is not Checked
        await GenericMethods.assertion_CheckboxIsNotChecked(Buttons_Elements.checkbox1)

        // Validating Checkbox 2 is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.checkbox2)

        // Validating Checkbox 2 Label is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.checkbox2Label)

        // Validating Checkbox 2 Label Text
        await GenericMethods.assertion_TextToBePresentInElement(Buttons_Elements.checkbox2Label, checkbox2Label)

        // Validating Checkbox 2 is not Checked
        await GenericMethods.assertion_CheckboxIsNotChecked(Buttons_Elements.checkbox2)

        // Validating Checkbox 3 is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.checkbox3)

        // Validating Checkbox 3 Label is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.checkbox3Label)

        // Validating Checkbox 3 Label Text
        await GenericMethods.assertion_TextToBePresentInElement(Buttons_Elements.checkbox3Label, checkbox3Label)

        // Validating Checkbox 3 is not Checked
        await GenericMethods.assertion_CheckboxIsNotChecked(Buttons_Elements.checkbox3)

        // Validating Submit Button is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.resetButton)

        // Validating Reset Button Text
        await GenericMethods.assertion_TextToBePresentInElement(Buttons_Elements.resetButton, resetButtonText)

    })

    test('Functionality: Validate Checkbox 1', async ({ Buttons_Elements, GenericMethods }) => {

        // Clicking on Checkbox 1
        await GenericMethods.clickOn(Buttons_Elements.checkbox1)

        // Validating Checkbox 1 is Checked
        await GenericMethods.assertion_CheckboxIsChecked(Buttons_Elements.checkbox1)

    })

    test('Functionality: Validate Checkbox 2', async ({ Buttons_Elements, GenericMethods }) => {

        // Clicking on Checkbox 2
        await GenericMethods.clickOn(Buttons_Elements.checkbox2)

        // Validating Checkbox 2 is Checked
        await GenericMethods.assertion_CheckboxIsChecked(Buttons_Elements.checkbox2)

    })

    test('Functionality: Validate Checkbox 3', async ({ Buttons_Elements, GenericMethods }) => {

        // Clicking on Checkbox 3
        await GenericMethods.clickOn(Buttons_Elements.checkbox3)

        // Validating Checkbox 3 is Checked
        await GenericMethods.assertion_CheckboxIsChecked(Buttons_Elements.checkbox3)

    })

    test('Functionality: Validate Reset Button', async ({ Buttons_Elements, GenericMethods, Buttons_Actions }) => {

        // Checking all Checkboxes
        await Buttons_Actions.checkingAllCheckboxes()

        // Click Reset Button
        await GenericMethods.clickOn(Buttons_Elements.resetButton)

        // Validating Checkbox 1 is not Checked
        await GenericMethods.assertion_CheckboxIsNotChecked(Buttons_Elements.checkbox1)

        // Validating Checkbox 2 is not Checked
        await GenericMethods.assertion_CheckboxIsNotChecked(Buttons_Elements.checkbox2)

        // Validating Checkbox 3 is not Checked
        await GenericMethods.assertion_CheckboxIsNotChecked(Buttons_Elements.checkbox3)

    })

})