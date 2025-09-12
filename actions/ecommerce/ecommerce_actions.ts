import { type Page, type Locator, expect } from '@playwright/test'
import { AuthEcommerce_Elements } from '@Pages/ecommerce/ecommerce_elements'

export class AuthEcommerce_Actions {

    readonly page: Page // Mandatory
    readonly authEcommerce_Elements: AuthEcommerce_Elements

    constructor(page: Page) {

        this.page = page
        this.authEcommerce_Elements = new AuthEcommerce_Elements(page)
        // Mandatory
    }

    // Method to Submit Login Form
    async SubmitLoginForm(email: string, password: string) {

        // Fill in email
        await this.authEcommerce_Elements.inputEmail.fill(email)

        // Fill in password
        await this.authEcommerce_Elements.inputPassword.fill(password)

        // Click Submit Button
        await this.authEcommerce_Elements.buttonSubmit.click()

    }

    // Method to Call Page and Login
    async CallPageAndLogin() {

        // Calling Data
        const email = process.env.CREDENCIAL_EMAIL as string
        const password = process.env.CREDENCIAL_PASSWORD as string

        // Loading Ecommerce Page
        await this.page.goto('auth_ecommerce')

        // Calling LoginForm
        await this.SubmitLoginForm(email, password)

    }

    // Method to get Product Data by product Card Position
    async GetProductDataByCardPosition(productPosition: number) {

        // Retrieving Data
        const productNameClicked = await this.authEcommerce_Elements.nameAnyProduct.nth(productPosition).textContent() // Name
        const productPriceClicked = await this.authEcommerce_Elements.priceAnyProduct.nth(productPosition).textContent() // Price
        const productSrcClicked = await this.authEcommerce_Elements.srcAnyProduct.nth(productPosition).getAttribute('src') // thumbnail

        // Creating object to export
        const productData = {
            'name': productNameClicked,
            'price': productPriceClicked,
            'src': productSrcClicked
        }

        // Return Data
        return productData
    }

    // Method to get Product Data by Shopping Cart Position
    async AddProductToShoppingCartByPosition(productPosition: number) {

        // Starts with position=0
        await this.authEcommerce_Elements.buttonAddToCartAnyProduct.nth(productPosition).click()

    }

    async GetProductDataByCartPosition(cardPosition: number) {

        // Retrieving Data
        const productNameAdded = await this.authEcommerce_Elements.nameAnyCartItem.nth(cardPosition).textContent() // Name
        const productPriceAdded = await this.authEcommerce_Elements.priceAnyCartItem.nth(cardPosition).textContent() // Price
        const productSrcAdded = await this.authEcommerce_Elements.srcAnyCartItem.nth(cardPosition).getAttribute('src') // Thumbnail src
        const productQuantityAdded = await this.authEcommerce_Elements.inputQuantityAnyCartItem.nth(cardPosition).inputValue() // Quantity

        // Creating object to export
        const productData = {
            'name': productNameAdded,
            'price': productPriceAdded,
            'src': productSrcAdded,
            'quantity': productQuantityAdded
        }

        // Returning Data
        return productData

    }

    // Method to Compare Card data with Cart data
    async CompareCardWithCart(cardData: any, cartData: any) {

        // Compare Card values with Cart values
        expect(cartData.name).toBe(cardData.name) // Name Added = Name Clicked
        expect(cartData.price).toBe(cardData.price) // Price Addded = PRice Clicked
        expect(cartData.src).toContain(cardData.src) // SRC Added includes in SRC Clicked

    }

    // Method to Calculate Total Price from products
    async CalculateTotalPrice(...productData: number[]) {

        // Calculate the sum of all product prices
        return productData.reduce((total, num) => total + num, 0)

    }

    // Method to Retrieve Price From Text
    async getPriceFromText(element: Locator) {
        const finalPrice: number = parseFloat((await element.textContent()).replace(/[^0-9.]/g, ""))
        return finalPrice
    }
}