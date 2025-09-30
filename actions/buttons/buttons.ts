import { type Page, type Locator, expect } from '@playwright/test'
import { Buttons_Elements } from '@Pages/buttons/buttons'
import { GenericMethods } from '@Actions/GenericMethods'

export class Buttons_Actions {

    readonly page: Page // Mandatory
    readonly buttons_Elements: Buttons_Elements

    constructor(page: Page) {

        this.page = page
        // Mandatory

        this.buttons_Elements = new Buttons_Elements(page)
        // Initializing Page Elements
    }

    // Checking all checkboxes
    async checkingAllCheckboxes() {

        // Checking Checkbox 1
        await this.buttons_Elements.checkbox1.check()

        // Checking Checkbox 2
        await this.buttons_Elements.checkbox2.check()

        // Checking Checkbox 3
        await this.buttons_Elements.checkbox3.check()

    }

}
