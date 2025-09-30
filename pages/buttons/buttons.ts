import { type Page, type Locator, expect } from '@playwright/test'

export class Buttons_Elements {

    readonly page: Page // Mandatory
    
    // Page Header
    readonly titleHeaderButtons: Locator
    readonly titleHeaderRadialbuttons: Locator

    // Checkbox 1
    readonly checkbox1: Locator
    readonly checkbox1Label: Locator

    // Checkbox 2
    readonly checkbox2: Locator
    readonly checkbox2Label: Locator

    // Checkbox 3
    readonly checkbox3: Locator
    readonly checkbox3Label: Locator

    // Reset Button
    readonly resetButton: Locator

    // Radio 1
    readonly radioButton1: Locator
    readonly radioButton1Label: Locator

    // Radio 2
    readonly radioButton2: Locator
    readonly radioButton2Label: Locator

    // Radio 3
    readonly radioButton3: Locator
    readonly radioButton3Label: Locator

    // Radio 4
    readonly radioButton4: Locator
    readonly radioButton4Label: Locator

    constructor(page: Page) {

        this.page = page
        // Mandatory

        this.titleHeaderButtons = page.locator('//h2')
        // Page Header

        this.checkbox1 = page.locator('//input[@id="checkbox1"]')
        // Checkbox 1

        this.checkbox1Label = page.locator('//label[@for="exampleCheck1"]').nth(0)
        // Checkbox 1 Label

        this.checkbox2 = page.locator('//input[@id="checkbox2"]')
        // Checkbox 2

        this.checkbox2Label = page.locator('//label[@for="exampleCheck1"]').nth(1)
        // Checkbox 2 Label

        this.checkbox3 = page.locator('//input[@id="checkbox3"]')
        // Checkbox 3

        this.checkbox3Label = page.locator('//label[@for="exampleCheck1"]').nth(2)
        // Checkbox 3 Label

        this.resetButton = page.getByRole('button', { name: 'Reset' })
        // Reset Button

        this.titleHeaderRadialbuttons = page.locator('//h2')
        // Page Header

        this.radioButton1 = page.locator('//input[@id="radio-button1"]')
        // Radio Button 1

        this.radioButton1Label = page.locator('//label[@for="radio-button1"]')
        // Radio Button 1 Label

        this.radioButton2 = page.locator('//input[@id="radio-button2"]')
        // Radio Button 2

        this.radioButton2Label = page.locator('//label[@for="radio-button2"]')
        // Radio Button 2 Label

        this.radioButton3 = page.locator('//input[@id="radio-button3"]')
        // Radio Button 3

        this.radioButton3Label = page.locator('//label[@for="radio-button3"]')
        // Radio Button 3 Label

        this.radioButton4 = page.locator('//input[@id="radio-button4"]')
        // Radio Button 4

        this.radioButton4Label = page.locator('//label[@for="radio-button4"]')
        // Radio Button 4 Label
        
    }



}
