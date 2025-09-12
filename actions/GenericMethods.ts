import { type Page, type Locator, expect } from '@playwright/test'

export class GenericMethods {

    readonly page: Page // Mandatory

    // Constructor
    constructor(page: Page) {

        this.page = page

    }

    // Method To Click On Element
    async clickOn(element: Locator) {
        await element.click()
    }

    // Method for text in any part of the URL
    async assertion_UrlToContain(urlPart: string) {
        await expect(this.page).toHaveURL(new RegExp(urlPart))
    }

    // Method for Element to be visible
    async assertion_ElementToBeVisible(element: Locator) {
        await element.waitFor({ state: 'visible' })
        await expect(element).toBeVisible()
    }

    // Method for Text Present in Element
    async assertion_TextToBePresentInElement(element: Locator, text: string) {
        await expect(element).toContainText(text)
    }

    // Method for Element Not Visible
    async assertion_ElementToNotBeVisible(element: Locator) {
        await expect(element).not.toBeVisible()
    }

    // Method for Expect Value To Be
    async assertion_ValueToBe(element: string, value: string) {
        expect(element).toBe(value)
    }

    // Method to Fill an input
    async fill(element: Locator, value: string) {
        await element.fill(value)
    }

    // Assertion to Verify Attribute
    async assertion_AttributeToBe(element: Locator, attribute: string, value: string) {
        await expect(element).toHaveAttribute(attribute, value)
    }

    // Method to Select Option by Value
    async selectOptionByValue(element: Locator, value: string) {
        await element.selectOption(value)
    }

}