import { type Page, type Locator, expect } from '@playwright/test'

export class GenericMethods {

    readonly page: Page // Mandatory

    // Constructor
    constructor(page: Page) {

        this.page = page

    }

    ///////////////////////////////////////// Generic Assertions 

    // Assertion for text in any part of the URL
    async assertion_UrlToContain(urlPart: string) {
        await expect.soft(this.page).toHaveURL(new RegExp(urlPart))
    }
    // Assertion for Element to be visible
    async assertion_ElementToBeVisible(element: Locator) {
        await element.waitFor({ state: 'visible' })
        await expect.soft(element).toBeVisible()
    }

    // Assertion for Text Present in Element
    async assertion_TextToBePresentInElement(element: Locator, text: string) {
        await expect.soft(element).toContainText(text)
    }

    // Assertion for Element Not Visible
    async assertion_ElementToNotBeVisible(element: Locator) {
        await expect.soft(element).not.toBeVisible()
    }

    // Assertion for Expect Value To Be
    async assertion_ValueToBe(element: any, value: any) {
        expect.soft(element).toBe(value)
    }

    // Assertion to Verify Attribute
    async assertion_AttributeToBe(element: Locator, attribute: string, value: string) {
        await expect.soft(element).toHaveAttribute(attribute, value)
    }

    // Text not present in element
    async assertion_TextToNotBePresentInElement(element: Locator, text: string) {
        await expect.soft(element).not.toContainText(text)
    }

    ///////////////////////////////////////// Generic Actions

    // Action To Click On Element
    async clickOn(element: Locator) {
        await element.click()
    }

    // Action to Fill an input
    async fill(element: Locator, value: string) {
        await element.fill(value)
    }

    // Action to Select Option by Value
    async selectOptionByValue(element: Locator, value: string) {
        await element.selectOption(value)
    }

    // Action To Retrieve Text from Element
    async getInputValueFromElement(element: Locator) {
        const textFromElement = await element.inputValue()
        return textFromElement
    } 
}