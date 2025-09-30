import { test } from 'my-test'

test.describe("Buttons and Checkboxes Tests", () => {

    test.beforeEach('Precondition: Navigate to Buttons/Checkboxes Page', async ({ page }) => {

        // Calling Page Name
        const pageName = 'radiobuttons'

        // Loading Page
        await page.goto(pageName)

    })

    test('UI: Validate Radio Buttons and Elements', async ({ Buttons_Elements, GenericMethods }) => {

        // Data
        const titleHeaderRadialbuttons = 'Radio buttons'
        const radioButton1Label = 'Radio button 1'
        const radioButton2Label = 'Radio button 2'
        const radioButton3Label = 'Radio button 3'
        const radioButton4Label = 'Radio button 4 - disabled'

        // Validating Page Header is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.titleHeaderRadialbuttons)

        // Validating Page Header Text
        await GenericMethods.assertion_TextToBePresentInElement(Buttons_Elements.titleHeaderRadialbuttons, titleHeaderRadialbuttons)

        // Validating Radio Button 1 is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.radioButton1)

        // Validating Radio Button 1 Label is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.radioButton1Label)

        // Validating Radio Button 1 Label Text
        await GenericMethods.assertion_TextToBePresentInElement(Buttons_Elements.radioButton1Label, radioButton1Label)

        // Validating Radio Button 1 is not Checked
        await GenericMethods.assertion_CheckboxIsNotChecked(Buttons_Elements.radioButton1)

        // Validating Radio Button 2 is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.radioButton2)

        // Validating Radio Button 2 Label is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.radioButton2Label)

        // Validating Radio Button 2 Label Text
        await GenericMethods.assertion_TextToBePresentInElement(Buttons_Elements.radioButton2Label, radioButton2Label)

        // Validating Radio Button 2 is not Checked
        await GenericMethods.assertion_CheckboxIsNotChecked(Buttons_Elements.radioButton2)

        // Validating Radio Button 3 is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.radioButton3)

        // Validating Radio Button 3 Label is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.radioButton3Label)

        // Validating Radio Button 3 Label Text
        await GenericMethods.assertion_TextToBePresentInElement(Buttons_Elements.radioButton3Label, radioButton3Label)

        // Validating Radio Button 3 is Checked
        await GenericMethods.assertion_CheckboxIsChecked(Buttons_Elements.radioButton3)

        // Validating Radio Button 4 is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.radioButton4)

        // Validating Radio Button 4 Label is Visible
        await GenericMethods.assertion_ElementToBeVisible(Buttons_Elements.radioButton4Label)

        // Validating Radio Button 4 Label Text
        await GenericMethods.assertion_TextToBePresentInElement(Buttons_Elements.radioButton4Label, radioButton4Label)

        // Validating Radio Button 4 is not Checked
        await GenericMethods.assertion_CheckboxIsNotChecked(Buttons_Elements.radioButton4)

        // Validating Radio Button 4 is Disabled
        await GenericMethods.assertion_ElementIsDisabled(Buttons_Elements.radioButton4)

    })

    test('Functionality: Validate Radio Button 1', async ({ Buttons_Elements, GenericMethods }) => {

        // Clicking on Radio Button 1
        await GenericMethods.clickOn(Buttons_Elements.radioButton1)

        // Validating Radio Button 1 is Checked
        await GenericMethods.assertion_CheckboxIsChecked(Buttons_Elements.radioButton1)

    })

    test('Functionality: Validate Radio Button 2', async ({ Buttons_Elements, GenericMethods }) => {

        // Clicking on Radio Button 2
        await GenericMethods.clickOn(Buttons_Elements.radioButton2)

        // Validating Radio Button 2 is Checked
        await GenericMethods.assertion_CheckboxIsChecked(Buttons_Elements.radioButton2)

    })

    test('Functionality: Validate Radio Button 3', async ({ Buttons_Elements, GenericMethods }) => {

        // Clicking on Radio Button 3
        await GenericMethods.clickOn(Buttons_Elements.radioButton3)

        // Validating Radio Button 3 is Checked
        await GenericMethods.assertion_CheckboxIsChecked(Buttons_Elements.radioButton3)

    })

    test('Functionality: Validate Radio Button 4', async ({ Buttons_Elements, GenericMethods }) => {

        // Radio button 4 is disabled and cannot be clicked
        await GenericMethods.assertion_ElementIsDisabled(Buttons_Elements.radioButton4)

        // Validating Radio Button 4 is not Checked
        await GenericMethods.assertion_CheckboxIsNotChecked(Buttons_Elements.radioButton4)

    })

})
