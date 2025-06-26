import { type Page, type Locator, expect } from '@playwright/test'

export class AuthEcommerce {

    readonly page: Page // Mandatory

    // Authentication
    readonly inputEmail: Locator // Input for Email
    readonly inputPassword: Locator // Input for Passsword
    readonly buttonSubmit: Locator // Submit Button
    readonly containerLoginShop: Locator // Login Shop Container
    readonly linkLogout: Locator // Logout link
    readonly containerLoginAlert: Locator // Alert container for wrong login credentials

    // Product Container
    readonly containerAnyProduct: Locator // Locator to find any nth-product
    readonly nameAnyProduct: Locator // Locator to find any nth-product name
    readonly priceAnyProduct: Locator // Locator to find any nth-product price
    readonly buttonAddToCartAnyProduct: Locator // Locator to find any nth-product add to cart button
    readonly srcAnyProduct: Locator // Locator to find any products thumbnail

    // Shopping Cart Headers
    readonly titleHeaderCart: Locator // cart-item cart-header cart-column
    readonly priceHeaderCart: Locator // cart-price cart-header cart-column
    readonly quantityHeaderCart: Locator // cart-quantity cart-header cart-column

    // Shopping Cart Container
    readonly containerAnyRowCartItem: Locator // container for cart
    readonly nameAnyCartItem: Locator // cart-item-title
    readonly priceAnyCartItem: Locator // cart-price cart-column
    readonly srcAnyCartItem: Locator // any src from cart-item-image
    readonly inputQuantityAnyCartItem: Locator // cart-quantity-input
    readonly buttonRemoveAnyCartItem: Locator // btn btn-danger
    readonly cartTotalPrice: Locator // //*[@class="cart-total-price"]
    readonly proceedToCheckout: Locator // PROCEED TO CHECKOUT

    // Shipping Details
    readonly shippingDetailsContainer: Locator // //*[@id="shipping-address"]
    readonly phoneNumberLabel: Locator //label 0
    readonly phoneNumberInput: Locator  //input[@name="phone"]
    readonly streetFormLabel: Locator//label 1
    readonly streetFormInput: Locator //input[@name="street"]
    readonly cityFormLabel: Locator //label 2
    readonly cityFormInput: Locator //input[@name="city"]
    readonly countryFormLabel: Locator //label 3
    readonly countryFormSelect: Locator //select[@name="country"]
    readonly submitOrderButton: Locator // Submit Order getByRole('button', { name: 'Submit Order' })
    readonly placeholderShippingDetails: any // Shipping Details
    readonly confirmationMessage: Locator // message

    constructor(page: Page) {

        this.page = page
        // Mandatory

        this.inputEmail = page.getByRole('textbox', { name: 'Email' })
        // Or locator('//*[@id="email"]')

        this.inputPassword = page.getByRole('textbox', { name: 'Password' })
        // Or locator('//*[@id="password"]')

        this.buttonSubmit = page.getByRole('button', { name: 'Submit' })
        // Or locator('//*[@id="submitLoginBtn"]')

        this.containerLoginShop = page.locator('//*[@id="loginSection"]')
        // Login Shop Container

        this.linkLogout = page.locator('//*[@id="logout"]')
        // Link to Logout

        this.containerLoginAlert = page.locator('//*[@class="alert alert-danger"]')
        // Red Alert container for wrong credentials

        this.containerAnyProduct = page.locator('//*[@class="shop-item"]')
        // Container for Products to use with nth 0-4

        this.nameAnyProduct = page.locator('//*[@class="shop-item-title"]')
        // Any Products name to use with nth 0-4

        this.priceAnyProduct = page.locator('//*[@class="shop-item-price"]')
        // Any Products price to use with nth 0-4

        this.buttonAddToCartAnyProduct = page.getByRole('button', { name: 'ADD TO CART' })
        // Any Products Addto Cart button to use with nth 0-4

        this.srcAnyProduct = page.locator('//*[@class="shop-item-image"]')
        // To retrieve any product SRC link during assertion

        this.titleHeaderCart = page.locator('//*[@class="cart-item cart-header cart-column"]')
        // Shopping Cart Header: Title column

        this.priceHeaderCart = page.locator('//*[@class="cart-price cart-header cart-column"]')
        // Shopping Cart Header: Price column

        this.quantityHeaderCart = page.locator('//*[@class="cart-quantity cart-header cart-column"]')
        // Shopping Cart Header: Quantity column

        this.containerAnyRowCartItem = page.locator('//*[@class="cart-row"]')
        // Any row in Shopping Cart. nth(0)=Headers, Products starts in nth(1)

        this.nameAnyCartItem = page.locator('//*[@class="cart-item-title"]')
        // Any cart item name/title for the nth() given

        this.priceAnyCartItem = page.locator('//*[@class="cart-price cart-column"]')
        // Any cart item nprice for the nth() given

        this.srcAnyCartItem = page.locator('//*[@class="cart-item-image"]')
        // Any cart item src for the nth() given

        this.inputQuantityAnyCartItem = page.locator('//*[@class="cart-quantity-input"]')
        // Any cart item quantity for the nth() given

        this.buttonRemoveAnyCartItem = page.getByRole('button', { name: 'REMOVE' })
        // Any cart item remove button for the nth() given OR could use getbyrole

        this.cartTotalPrice = page.locator('//*[@class="cart-total-price"]')
        // Total Price

        this.proceedToCheckout = page.getByRole('button', { name: 'PROCEED TO CHECKOUT' })
        // Proceed to Checkout

        this.shippingDetailsContainer = page.locator('//*[@id="shipping-address"]')
        // Shipping Details container
        
        this.phoneNumberLabel = page.locator('//label').nth(0)
        // Label for Phone

        this.phoneNumberInput = page.locator('//input[@name="phone"]')
        // input for Phone

        this.streetFormLabel = page.locator('//label').nth(1)
        // Label for Street

        this.streetFormInput = page.locator('//input[@name="street"]')
        // input for Street

        this.cityFormLabel = page.locator('//label').nth(2)
        // Label for City

        this.cityFormInput = page.locator('//input[@name="city"]')
        // input for City

        this.countryFormLabel = page.locator('//label').nth(3)
        // Label for Country

        this.countryFormSelect = page.locator('//select[@name="country"]')
        // Select for Country

        this.submitOrderButton = page.getByRole('button', { name: 'Submit Order' })
        // Submit ORder Button

        this.placeholderShippingDetails = {
            'phone': '+1234567890',
            'street': 'Placeholder Street 12345',
            'city': 'Placeholder City',
            'country': 'Brazil',
            'confirmationMessage': 'Congrats! Your order of $1429.1 has been registered and will be shipped to Placeholder Street 12345, Placeholder City - Brazil.'
        } // Shipping Details

        this.confirmationMessage = page.locator('//*[@id="message"]')
        // Confirmation message
    }

    async SubmitLoginForm(email: string, password: string) {

        // Fill in email
        await this.inputEmail.fill(email)

        // Fill in password
        await this.inputPassword.fill(password)

        // Click Submit Button
        await this.buttonSubmit.click()

    }

    async CallPageAndLogin() {

        // Calling Data
        const email = process.env.CREDENCIAL_EMAIL as string
        const password = process.env.CREDENCIAL_PASSWORD as string

        // Loading Ecommerce Page
        await this.page.goto('auth_ecommerce')

        // Calling LoginForm
        await this.SubmitLoginForm(email, password)

    }

    async AddProductToShoppingCartByPosition(productPosition: number) {

        // Starts with position=0
        await this.buttonAddToCartAnyProduct.nth(productPosition).click()

    }

    async GetProductDataByCardPosition(productPosition: number) {

        // Retrieving Data
        const productNameClicked = await this.nameAnyProduct.nth(productPosition).textContent() // Name
        const productPriceClicked = await this.priceAnyProduct.nth(productPosition).textContent() // Price
        const productSrcClicked = await this.srcAnyProduct.nth(productPosition).getAttribute('src') // thumbnail

        // Creating object to export
        const productData = {
            'name': productNameClicked,
            'price': productPriceClicked,
            'src': productSrcClicked
        }

        // Return Data
        return productData
    }
    async GetProductDataByCartPosition(cardPosition: number) {

        // Retrieving Data
        const productNameAdded = await this.nameAnyCartItem.nth(cardPosition).textContent() // Name
        const productPriceAdded = await this.priceAnyCartItem.nth(cardPosition).textContent() // Price
        const productSrcAdded = await this.srcAnyCartItem.nth(cardPosition).getAttribute('src') // Thumbnail src
        const productQuantityAdded = await this.inputQuantityAnyCartItem.nth(cardPosition).inputValue() // Quantity

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

    async CompareCardWithCart(cardData: any, cartData: any) {

        // Compare Card values with Cart values
        expect(cartData.name).toBe(cardData.name) // Name Added = Name Clicked
        expect(cartData.price).toBe(cardData.price) // Price Addded = PRice Clicked
        expect(cartData.src).toContain(cardData.src) // SRC Added includes in SRC Clicked

    }
}