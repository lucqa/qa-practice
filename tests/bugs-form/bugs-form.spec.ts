import { test } from 'my-test'

test.describe('Bugs Form', () => {

    test.beforeEach(async ({ page }) => {

        // Calling Page Name
        const pageName = 'bugs-form'

        // Loading Page
        await page.goto(pageName)

    })

    test('Bug Form - Submit Form and Validate Results', async ({ BugForm_Actions, BugForm_Elements, GenericMethods }) => {

        // Test Data
        const firstName = 'John'
        const lastName = 'Doe'
        const phoneNumber = '12345678901'
        const country = 'Brazil'
        const email = 'john@doe.com'
        const password = 'Password123'
        const successMessage = 'Successfully registered the following information'

        // Completing the form and submitting
        await BugForm_Actions.SubmitBugForm(firstName, lastName, phoneNumber, country, email, password, true)

        // Asserting Success Message is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.messageContainer)

        // Asserting Success Message Text
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.messageContainer, successMessage)

        // Asserting Results Section is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.resultsSectionContainer)

        // Asserting Result First Name
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.resultFirstName, firstName)

        // Asserting Result Last Name
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.resultLastName, lastName)

        // Asserting Result Phone Number
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.resultPhoneNumber, phoneNumber)

        // Asserting Result Country
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.resultCountry, country)

        // Asserting Result Email
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.resultEmail, email)

    })

    test('Bug Form - Submit Form Negative Test - Without Mandatory Last Name', async ({ BugForm_Actions, BugForm_Elements, GenericMethods }) => {

        // Test Data
        const firstName = 'John'
        const phoneNumber = '12345678901'
        const country = 'Brazil'
        const email = 'john@doe.com'
        const password = 'Password123'
        const successMessage = 'Successfully registered the following information'

        // Completing the form and submitting
        await BugForm_Actions.SubmitBugForm(firstName, '', phoneNumber, country, email, password, true)

        // Asserting Success Message is not Visible
        await GenericMethods.assertion_ElementToNotBeVisible(BugForm_Elements.messageContainer)

        // Asserting Success Message Text is not Visible
        await GenericMethods.assertion_TextToNotBePresentInElement(BugForm_Elements.messageContainer, successMessage)

        // Asserting Results Section is not Visible
        await GenericMethods.assertion_ElementToNotBeVisible(BugForm_Elements.resultsSectionContainer)

    })

    test('Bug Form - Submit Form Negative Test - Without Mandatory Phone Number', async ({ BugForm_Actions, BugForm_Elements, GenericMethods }) => {

        // Test Data
        const firstName = 'John'
        const lastName = 'Doe'
        const country = 'Brazil'
        const email = 'john@doe.com'
        const password = 'Password123'
        const errorMessage = 'The phone number should contain at least 10 characters!'

        // Completing the form and submitting
        await BugForm_Actions.SubmitBugForm(firstName, lastName, '', country, email, password, true)

        // Asserting Message Container is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.messageContainer)

        // Asserting Error Message Text
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.messageContainer, errorMessage)

    })

    test('Bug Form - Submit Form Negative Test - Without Mandatory Email', async ({ BugForm_Actions, BugForm_Elements, GenericMethods }) => {

        // Test Data
        const firstName = 'John'
        const lastName = 'Doe'
        const country = 'Brazil'
        const phoneNumber = '12345678901'
        const password = 'Password123'
        const errorMessage = 'The phone number should contain at least 10 characters!'

        // Completing the form and submitting
        await BugForm_Actions.SubmitBugForm(firstName, lastName, phoneNumber, country, '', password, true)

        // Asserting Message Container is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.messageContainer)

        // Asserting Error Message Text
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.messageContainer, errorMessage)
        
    })

    test('Bug Form - Submit Form Negative Test - Without Mandatory Password', async ({ BugForm_Actions, BugForm_Elements, GenericMethods }) => {

        // Test Data
        const firstName = 'John'
        const lastName = 'Doe'
        const phoneNumber = '12345678901'
        const country = 'Brazil'
        const email = 'john@doe.com'
        const errorMessage = 'The password should contain between [6,20] characters!'

        // Completing the form and submitting
        await BugForm_Actions.SubmitBugForm(firstName, lastName, phoneNumber, country, email, '', true)

        // Asserting Message Container is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.messageContainer)

        // Asserting Error Message Text
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.messageContainer, errorMessage)

    })

    test('Bug Form - Submit Form Negative Test - Without Accepting Terms and Conditions', async ({ BugForm_Actions, BugForm_Elements, GenericMethods }) => {

        const firstName = 'John'
        const lastName = 'Doe'
        const phoneNumber = '12345678901'
        const country = 'Brazil'
        const email = 'john@doe.com'
        const password = 'Password123'
        const successMessage = 'Successfully registered the following information'

        // Completing the form and submitting without accepting terms and conditions
        await BugForm_Actions.SubmitBugForm(firstName, lastName, phoneNumber, country, email, password, false)

        // Asserting Success Message Text is not Visible
        await GenericMethods.assertion_TextToNotBePresentInElement(BugForm_Elements.messageContainer, successMessage)

    })

    test('Bug Form - Submit Form Negative Test - With Invalid Phone Number', async ({ BugForm_Actions, BugForm_Elements, GenericMethods, page }) => {

        // Test Data
        const firstName = 'John'
        const lastName = 'Doe'
        const phoneNumber = 'abcdefghijklmno'
        const country = 'Brazil'
        const email = 'john@doe.com'
        const password = 'Password123'

        // Completing the form and submitting
        await BugForm_Actions.SubmitBugForm(firstName, lastName, phoneNumber, country, email, password, true)

        // Asserting Message Container is not Visible
        await GenericMethods.assertion_ElementToNotBeVisible(BugForm_Elements.messageContainer)

    })

    test('Bug Form - Submit Form Negative Test - With Invalid Password', async ({ BugForm_Actions, BugForm_Elements, GenericMethods, page }) => {

        // Test Data
        const firstName = 'John'
        const lastName = 'Doe'
        const phoneNumber = '12345678901'
        const country = 'Brazil'
        const email = 'john@doe.com'
        const password = '12345'
        const errorMessage = 'The password should contain between [6,20] characters!'

        // Completing the form and submitting
        await BugForm_Actions.SubmitBugForm(firstName, lastName, phoneNumber, country, email, password, true)

        // Asserting Message Container is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.messageContainer)

        // Asserting Error Message Text
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.messageContainer, errorMessage)

    })

    test('Bug Form - Submit Form Negative Test - With Invalid Email', async ({ BugForm_Actions, BugForm_Elements, GenericMethods, page }) => {

        // Test Data
        const firstName = 'John'
        const lastName = 'Doe'
        const phoneNumber = '12345678901'
        const country = 'Brazil'
        const email = 'johnemailwithout'
        const password = 'Password123'

        // Completing the form and submitting
        await BugForm_Actions.SubmitBugForm(firstName, lastName, phoneNumber, country, email, password, true)

        // Asserting Message Container is Not Visible
        await GenericMethods.assertion_ElementToNotBeVisible(BugForm_Elements.messageContainer)

    })

    test('Bug Form - Submit Form Negative Test - With All Fields Empty', async ({ BugForm_Actions, BugForm_Elements, GenericMethods, page }) => {

        // Test Data
        const errorMessage = 'The password should contain between [6,20] characters!'
        const defaultCountry = 'Select a country...'

        // Completing the form and submitting
        await BugForm_Actions.SubmitBugForm('', '', '', defaultCountry, '', '', true)

        // Asserting Message Container is Not Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.messageContainer)

        // Asserting Error Message Text
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.messageContainer, errorMessage)

    })

    test('Bug Form - Submit Form Negative Test - Passoword with over 20 characters', async ({ BugForm_Actions, BugForm_Elements, GenericMethods, page }) => {

        // Test Data
        const password = '123456789012345678901' // 21 characters

        // Fill password with 21 characters
        await GenericMethods.fillInputWithValue(BugForm_Elements.inputPassword, password)

        // Retrieving input value
        const inputValue = await GenericMethods.getInputValueFromElement(BugForm_Elements.inputPassword)

        // Asserting input value length is not more than 20 characters
        await GenericMethods.assertion_ValueToBe(inputValue.length <= 20, true)

    })

    test('Bug Form - Submit Form Negative Test - Phone Number with less than 10 characters', async ({ BugForm_Actions, BugForm_Elements, GenericMethods, page }) => {

        // Test Data
        const firstName = 'John'
        const lastName = 'Doe'
        const phoneNumber = '123456789' // 9 characters
        const country = 'Brazil'
        const email = 'john@doe.com'
        const password = 'Password123'
        const successMessage = 'The phone number should contain at least 10 characters!'

        // Completing the form and submitting
        await BugForm_Actions.SubmitBugForm(firstName, lastName, phoneNumber, country, email, password, true)

        // Asserting container is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.messageContainer)

        // Asserting Error Message Text
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.messageContainer, successMessage)

    })

    test('Bug Form - UI Validation', async ({ BugForm_Elements, GenericMethods }) => {

        // Test Data
        const expectedTitleHeader = 'CHALLENGE - Spot the BUGS!'
        const expectedSubtitleHeader = 'This page contains at least 15 bugs. How many of them can you spot?'

        const expectedLabelFirstName = 'First Name'
        const expectedPlaceholderFirstName = 'Enter first name'

        const expectedLabelLastName = 'Last Name*'
        const expectedPlaceholderLastName = 'Enter last name'
        const expectedHelperTextLastName = 'Note: All the fields marked with * are mandatory'

        const expectedLabelPhoneNumber = 'Phone Number*'
        const expectedHelperTextPhoneNumber = 'Phone length validation: at least 10 digits'
        const expectedPlaceholderPhoneNumber = 'Enter phone number'

        const expectedLabelCountry = 'Country'
        const expectedPlaceholderCountry = 'Select a country...'

        const expectedLabelEmail = 'Email address*'
        const expectedPlaceholderEmail = 'Enter email'

        const expectedLabelPassword = 'Password*'
        const expectedPlaceholderPassword = 'Password'
        const expectedHelperTextPassword = 'Psw length validation: [6,20] characters'

        const expectedLabelTerms = 'I agree with the terms and conditions'
        const expectedButtonSubmitText = 'Register'

        // Asserting Title Header
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.titleHeader, expectedTitleHeader)

        // Asserting Subtitle Header
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.subtitleHeader, expectedSubtitleHeader)

        // Asserting First Name Input is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.inputFirstName)

        // Asserting First Name Label
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.labelFirstName, expectedLabelFirstName)

        // Asserting First Name Placeholder
        await GenericMethods.assertion_AttributeToBe(BugForm_Elements.inputFirstName, 'placeholder', expectedPlaceholderFirstName)

        // Asserting Last Name Input is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.inputLastName)

        // Asserting Last Name Label
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.labelLastName, expectedLabelLastName)

        // Asserting Last Name Placeholder
        await GenericMethods.assertion_AttributeToBe(BugForm_Elements.inputLastName, 'placeholder', expectedPlaceholderLastName)

        // Asserting Last Name Helper Text  is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.helperTextLastName)

        // Asserting Last Name Helper Text
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.helperTextLastName, expectedHelperTextLastName)

        // Asserting Phone Number Input is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.inputPhoneNumber)

        // Asserting Phone Number Label
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.labelPhoneNumber, expectedLabelPhoneNumber)

        // Asserting Phone Number Placeholder
        await GenericMethods.assertion_AttributeToBe(BugForm_Elements.inputPhoneNumber, 'placeholder', expectedPlaceholderPhoneNumber)

        // Asserting Phone Number Helper Text  is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.helperTextPhoneNumber)

        // Asserting Phone Number Helper Text
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.helperTextPhoneNumber, expectedHelperTextPhoneNumber)

        // Asserting Country Select is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.selectCountry)

        // Asserting Country Label
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.labelCountry, expectedLabelCountry)

        // Getting Country Placeholder Text
        const countryPlaceholder = await GenericMethods.getInputValueFromElement(BugForm_Elements.selectCountry)

        // Asserting Country Placeholder is equal as expected
        await GenericMethods.assertion_ValueToBe(countryPlaceholder, expectedPlaceholderCountry)

        // Asserting Email Input is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.inputEmail)

        // Asserting Email Label
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.labelEmail, expectedLabelEmail)

        // Asserting Email Placeholder
        await GenericMethods.assertion_AttributeToBe(BugForm_Elements.inputEmail, 'placeholder', expectedPlaceholderEmail)

        // Asserting Password Input is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.inputPassword)

        // Asserting Password Label
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.labelPassword, expectedLabelPassword)

        // Asserting Password Placeholder
        await GenericMethods.assertion_AttributeToBe(BugForm_Elements.inputPassword, 'placeholder', expectedPlaceholderPassword)

        // Asserting Password Helper Text  is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.helperTextPassword)

        // Asserting Password Helper Text
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.helperTextPassword, expectedHelperTextPassword)

        // Asserting Terms and Conditions Checkbox is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.checkboxTerms)

        // Asserting Terms and Conditions Label
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.labelTerms, expectedLabelTerms)

        // Asserting Submit Button is Visible
        await GenericMethods.assertion_ElementToBeVisible(BugForm_Elements.buttonSubmit)

        // Asserting Submit Button Text
        await GenericMethods.assertion_TextToBePresentInElement(BugForm_Elements.buttonSubmit, expectedButtonSubmitText)

        // Asserting Results Section is not Visible
        await GenericMethods.assertion_ElementToNotBeVisible(BugForm_Elements.resultsSectionContainer)

    })

})