import { type Page, type Locator, expect } from '@playwright/test'

export class BugForm_Elements {

    readonly page: Page // Mandatory

    // Form Header
    readonly titleHeader: Locator // Title Header
    readonly subtitleHeader: Locator // Subtitle Header

    // Form Inputs First Name
    readonly inputFirstName: Locator // Input First Name
    readonly labelFirstName: Locator // Label First Name

    // Form Inputs Last Name
    readonly inputLastName: Locator // Input Last Name
    readonly labelLastName: Locator // Label Last Name
    readonly helperTextLastName: Locator // Helper Text Last Name

    // Form Inputs Phone Number
    readonly inputPhoneNumber: Locator // Input Phone Number
    readonly labelPhoneNumber: Locator // Label Phone Number
    readonly helperTextPhoneNumber: Locator // Helper Text Phone Number

    // Form Country Selector
    readonly selectCountry: Locator // Select Country
    readonly labelCountry: Locator // Label Country

    // Form Email Input
    readonly inputEmail: Locator // Input Email
    readonly labelEmail: Locator // Label Email

    // Form password input
    readonly inputPassword: Locator // Input Password
    readonly labelPassword: Locator // Label Password
    readonly helperTextPassword: Locator // Helper Text Password

    // Terms and Conditions Checkbox
    readonly checkboxTerms: Locator // Checkbox Terms and Conditions
    readonly labelTerms: Locator // Label Terms and Conditions

    // Submit BNutton (Register)
    readonly buttonSubmit: Locator // Button Submit (Register)

    // Message Container
    readonly messageContainer: Locator // Message Container

    // Results Section
    readonly resultsSectionContainer: Locator // Results Section
    readonly resultFirstName: Locator // Results Section for First Name
    readonly resultLastName: Locator // Results Section for Last Name
    readonly resultPhoneNumber: Locator // Results Section for Phone Number
    readonly resultCountry: Locator // Results Section for Country
    readonly resultEmail: Locator // Results Section for Email

    constructor(page: Page) {

        this.page = page
        // Mandatory

        // Form Header
        this.titleHeader = page.locator('//h2') // header title
        this.subtitleHeader = page.locator('//small[@id="challengeHelp"]') // subtitle header

        // Form Inputs First Name  
        this.inputFirstName = page.locator('//*[@id="firstName"]') // input first name
        this.labelFirstName = page.locator('//label[@for="firstName"]') // label first name

        // Form Inputs Last Name
        this.inputLastName = page.locator('//*[@id="lastName"]') // input last name
        this.labelLastName = page.locator('//label[@for="lastName"]').nth(0) // label last name
        this.helperTextLastName = page.locator('//*[@id="lnHelp"]') // helper text last name

        // Form Inputs Phone Number
        this.inputPhoneNumber = page.locator('//*[@id="phone"]') // input phone number
        this.labelPhoneNumber = page.locator('//label[@for="lastName"]').nth(1) // label phone number
        this.helperTextPhoneNumber = page.locator('//*[@id="phoneHelp"]') // helper text phone number

        // Form Country Selector
        this.selectCountry = page.locator('//select[@id="countries_dropdown_menu"]') // select country
        this.labelCountry = page.locator('//label[@for="lastName"]').nth(2) // label country

        // Form Email Input
        this.inputEmail = page.locator('//*[@id="emailAddress"]') // input email
        this.labelEmail = page.locator('//label[@for="exampleInputEmail1"]') // label email

        // Form password input
        this.inputPassword = page.locator('//*[@id="password"]') // input password
        this.labelPassword = page.locator('//label[@for="exampleInputPassword1"]') // label password
        this.helperTextPassword = page.locator('//*[@id="pwHelp"]') // helper text password

        // Terms and Conditions Checkbox
        this.checkboxTerms = page.locator('//*[@id="exampleCheck1"]') // checkbox terms and conditions
        this.labelTerms = page.locator('//label[@for="exampleCheck1"]') // label terms and conditions

        // Submit Button (Register)
        this.buttonSubmit = page.locator('//button[@id="registerBtn"]')// button submit (Register)

        // Message Container
        this.messageContainer = page.locator('//*[@id="message"]') // message container

        // Results Section
        this.resultsSectionContainer = page.locator('//*[@id="results-section"]') // results section container
        this.resultFirstName = page.locator('//*[@id="resultFn"]') // results section for First Name
        this.resultLastName = page.locator('//*[@id="resultLn"]') // results section for Last Name
        this.resultPhoneNumber = page.locator('//*[@id="resultPhone"]') // results section for Phone Number
        this.resultCountry = page.locator('//*[@id="country"]') // results section for Country
        this.resultEmail = page.locator('//*[@id="resultEmail"]') // results section for Email

    }

}