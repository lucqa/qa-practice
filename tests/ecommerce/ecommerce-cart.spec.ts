import { test, expect } from "my-test"

test.describe("commerce: Cart Tests", () => {

    test.beforeEach('Precondition: User must be logged', async ({ authEcommerce_actions }) => {

        // Calling Page and Logging In
        await authEcommerce_actions.CallPageAndLogin()

    })

    test('Add an Item to Shopping Cart', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Storing first products Data to later assertion
        // const firstProductCardData = await authEcommerce_elements.GetProductDataByCardPosition(0)
        const firstProductCardData = await authEcommerce_actions.GetProductDataByCardPosition(0)

        // Adding first product to cart (nth=0)
        // await authEcommerce_elements.AddProductToShoppingCartByPosition(0)
        await authEcommerce_actions.AddProductToShoppingCartByPosition(0)

        // Verifying if Shopping Cart row was created (0=Header, Product>=1)
        // await expect(authEcommerce_elements.containerAnyRowCartItem.nth(1)).toBeVisible()
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.containerAnyRowCartItem.nth(1))

        // Storing Data from Shopping Cart products nth=0
        // const firstCartProductData = await authEcommerce_elements.GetProductDataByCartPosition(0)
        const firstCartProductData = await authEcommerce_actions.GetProductDataByCartPosition(0)

        // Expect Remove button to be displayed
        // await expect(authEcommerce_elements.buttonRemoveAnyCartItem).toBeVisible()
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.buttonRemoveAnyCartItem)

        // Expect Quantity to be 1
        // expect(firstCartProductData.quantity).toBe('1')
        await GenericMethods.assertion_ValueToBe(firstCartProductData.quantity, '1')

        // Expect Data from Clicked to be equal to data from Added
        // await authEcommerce_elements.CompareCardWithCart(firstProductCardData, firstCartProductData)
        await authEcommerce_actions.CompareCardWithCart(firstProductCardData, firstCartProductData)

    })

    test('Remove an Item From Shopping Cart', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Adding first product to cart (nth=0)
        await authEcommerce_actions.AddProductToShoppingCartByPosition(0)

        // Verifying if Shopping Cart row was created (0=Header, Product>=1)
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.containerAnyRowCartItem.nth(1))

        // Expect Remove button to be displayed
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.buttonRemoveAnyCartItem.nth(0))

        // Click Remove
        await GenericMethods.click_On(authEcommerce_elements.buttonRemoveAnyCartItem.nth(0))

        // Assertion Shopping Cart row is removed
        await GenericMethods.assertion_ElementToNotBeVisible(authEcommerce_elements.containerAnyRowCartItem.nth(1))

    })

    test('Add Multiples Items to the Shopping Cart', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Storing Products Data from Cards
        const firstProductCard = await authEcommerce_actions.GetProductDataByCardPosition(0)

        // Storing Products Data from Cards
        const secondProductCard = await authEcommerce_actions.GetProductDataByCardPosition(1)

        // Storing Products Data from Cards
        const thirdProductCard = await authEcommerce_actions.GetProductDataByCardPosition(2)

        // Calc Final Price
        const finalCalcPrice = await authEcommerce_actions.CalculateTotalPrice(
            parseFloat(firstProductCard.price.replace(/[^0-9.]/g, "")),
            parseFloat(secondProductCard.price.replace(/[^0-9.]/g, "")),
            parseFloat(thirdProductCard.price.replace(/[^0-9.]/g, ""))
        )

        // Adding first product to cart (nth=0)
        await authEcommerce_actions.AddProductToShoppingCartByPosition(0)

        // Adding 2nd product to cart (nth=1)
        await authEcommerce_actions.AddProductToShoppingCartByPosition(1)

        // Adding 3rd product to cart (nth=2)
        await authEcommerce_actions.AddProductToShoppingCartByPosition(2)

        // Retrieving Cart Data
        const firstProductCart = await authEcommerce_actions.GetProductDataByCartPosition(0)

        // Retrieving Cart Data
        const secondProductCart = await authEcommerce_actions.GetProductDataByCartPosition(1)

        // Retrieving Cart Data
        const thirdProductCart = await authEcommerce_actions.GetProductDataByCartPosition(2)

        // Comparing Card 1st with Cart 1st - Has to Match
        await GenericMethods.assertion_ValueToBe(firstProductCart.quantity, '1')
        await authEcommerce_actions.CompareCardWithCart(firstProductCard, firstProductCart)

        // Comparing Card 1st with Cart 1st - Has to Match
        await GenericMethods.assertion_ValueToBe(secondProductCart.quantity, '1')   
        await authEcommerce_actions.CompareCardWithCart(secondProductCard, secondProductCart)

        // Comparing Card 1st with Cart 1st - Has to Match
        await GenericMethods.assertion_ValueToBe(thirdProductCart.quantity, '1')
        await authEcommerce_actions.CompareCardWithCart(thirdProductCard, thirdProductCart)

        // Retrieving Final Price from UI
        const finalPrice = await authEcommerce_actions.getPriceFromText(authEcommerce_elements.cartTotalPrice)
        
        // Has to match price calc
        await GenericMethods.assertion_ValueToBe(finalPrice.valueOf.toString(), finalCalcPrice.valueOf.toString())

    })

   

    
})