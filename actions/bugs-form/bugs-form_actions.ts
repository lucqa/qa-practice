import { type Page, type Locator, expect } from '@playwright/test'
import { BugForm_Elements } from '@Pages/bugs-form/bugs-form_elements'
import { GenericMethods } from '@Actions/GenericMethods'

export class BugForm_Actions {

    readonly page: Page // Mandatory
    readonly bugForm_Elements: BugForm_Elements // Self declare for use in below methods
    readonly genericMethods: GenericMethods // Self declare for use in below methods

    constructor(page: Page) {

        this.page = page
        this.bugForm_Elements = new BugForm_Elements(page)
        this.genericMethods = new GenericMethods(page)
        // Mandatory

    }

    // Action to Submit Bug Form
    async SubmitBugForm(firstName: string, lastName: string, phoneNumber: string, country: string, email: string, password: string, terms: boolean) {

        // Filling First Name
        await this.bugForm_Elements.inputFirstName.fill(firstName)

        // Filling Last Name
        await this.bugForm_Elements.inputLastName.fill(lastName)

        // Filling Phone Number
        await this.bugForm_Elements.inputPhoneNumber.fill(phoneNumber)

        // Selecting Country
        await this.genericMethods.selectOptionByValue(this.bugForm_Elements.selectCountry, country)

        // Filling Email
        await this.bugForm_Elements.inputEmail.fill(email)

        // Filling Password
        await this.bugForm_Elements.inputPassword.fill(password)

        // Clicking on Terms and Conditions Checkbox
        if (terms) {
            await this.page.evaluate(() => document.getElementById('exampleCheck1').removeAttribute('disabled'));
            await this.genericMethods.clickOn(this.bugForm_Elements.checkboxTerms)
        }

        // Clicking on Submit Button
        await this.genericMethods.clickOn(this.bugForm_Elements.buttonSubmit)

    }
}