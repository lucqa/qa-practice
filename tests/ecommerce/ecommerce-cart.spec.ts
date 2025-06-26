import { test, expect } from "my-test"

test.describe("commerce: Cart Tests", () => {

    test.beforeEach('Precondition: User must be logged', async ({ authEcommerce }) => {

        // Calling Page and Logging In
        await authEcommerce.CallPageAndLogin()

    })

    test('Add an Item to Shopping Cart', async ({ authEcommerce }) => {

        // Storing first products Data to later assertion
        const firstProductCardData = await authEcommerce.GetProductDataByCardPosition(0)

        // Adding first product to cart (nth=0)
        await authEcommerce.AddProductToShoppingCartByPosition(0)

        // Verifying if Shopping Cart row was created (0=Header, Product>=1)
        await expect(authEcommerce.containerAnyRowCartItem.nth(1)).toBeVisible()

        // Storing Data from Shopping Cart products nth=0
        const firstCartProductData = await authEcommerce.GetProductDataByCartPosition(0)

        // Expect Remove button to be displayed
        await expect(authEcommerce.buttonRemoveAnyCartItem).toBeVisible()

        // Expect Quantity to be 1
        expect(firstCartProductData.quantity).toBe('1')

        // Expect Data from Clicked to be equal to data from Added
        await authEcommerce.CompareCardWithCart(firstProductCardData, firstCartProductData)

    })

    test('Remove an Item From Shopping Cart', async ({ authEcommerce }) => {

        // Adding first product to cart (nth=0)
        await authEcommerce.AddProductToShoppingCartByPosition(0)

        // Verifying if Shopping Cart row was created (0=Header, Product>=1)
        await expect(authEcommerce.containerAnyRowCartItem.nth(1)).toBeVisible()

        // Expect Remove button to be displayed
        await expect(authEcommerce.buttonRemoveAnyCartItem.nth(0)).toBeVisible()

        // Click Remove
        await authEcommerce.buttonRemoveAnyCartItem.nth(0).click()

        // Assertion Shopping Cart row is removed
        await expect(authEcommerce.containerAnyRowCartItem.nth(1)).not.toBeVisible()

    })

    test('Add Multiples Items to the Shopping Cart', async ({ authEcommerce }) => {

        // Storing Products Data from Cards
        const firstProductCard = await authEcommerce.GetProductDataByCardPosition(0)

        // Storing Products Data from Cards
        const secondProductCard = await authEcommerce.GetProductDataByCardPosition(1)

        // Storing Products Data from Cards
        const thirdProductCard = await authEcommerce.GetProductDataByCardPosition(2)

        // Calc Final Price
        const finalCalcPrice: number = parseFloat(firstProductCard.price.replace(/[^0-9.]/g, "")) + parseFloat(secondProductCard.price.replace(/[^0-9.]/g, "")) + parseFloat(thirdProductCard.price.replace(/[^0-9.]/g, ""))

        // Adding first product to cart (nth=0)
        await authEcommerce.AddProductToShoppingCartByPosition(0)

        // Adding 2nd product to cart (nth=1)
        await authEcommerce.AddProductToShoppingCartByPosition(1)

        // Adding 3rd product to cart (nth=2)
        await authEcommerce.AddProductToShoppingCartByPosition(2)

        // Retrieving Cart Data
        const firstProductCart = await authEcommerce.GetProductDataByCartPosition(0)

        // Retrieving Cart Data
        const secondProductCart = await authEcommerce.GetProductDataByCartPosition(1)

        // Retrieving Cart Data
        const thirdProductCart = await authEcommerce.GetProductDataByCartPosition(2)

        // Comparing Card 1st with Cart 1st - Has to Match
        expect(firstProductCart.quantity).toBe('1')
        await authEcommerce.CompareCardWithCart(firstProductCard, firstProductCart)

        // Comparing Card 1st with Cart 1st - Has to Match
        expect(secondProductCart.quantity).toBe('1')
        await authEcommerce.CompareCardWithCart(secondProductCard, secondProductCart)

        // Comparing Card 1st with Cart 1st - Has to Match
        expect(thirdProductCart.quantity).toBe('1')
        await authEcommerce.CompareCardWithCart(thirdProductCard, thirdProductCart)

        // Retrieving Final Price from UI
        const finalPrice: number = parseFloat((await authEcommerce.cartTotalPrice.textContent()).replace(/[^0-9.]/g, ""))

        // Has to match price calc
        expect(finalPrice.valueOf).toBe(finalCalcPrice.valueOf)

    })

   

    
})