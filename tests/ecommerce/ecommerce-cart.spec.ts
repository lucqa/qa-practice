import { test } from "my-test"

test.describe("commerce: Cart Tests", () => {

    test.beforeEach('Precondition: User must be logged', async ({ authEcommerce_actions }) => {

        // Calling Page and Logging In
        await authEcommerce_actions.CallPageAndLogin()

    })

    test('Add an Item to Shopping Cart', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Test Data
        const firstProductPosition = 0
        const shoppingCartRowPosition = 1
        const shoppingCartRow = 0
        const expectedQuantity = '1'

        // Storing first products Data to later assertion
        const firstProductCardData = await authEcommerce_actions.GetProductDataByCardPosition(firstProductPosition)

        // Adding first product to cart (nth=0)
        await authEcommerce_actions.AddProductToShoppingCartByPosition(firstProductPosition)

        // Verifying if Shopping Cart row was created (0=Header, Product>=1)
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.containerAnyRowCartItem.nth(shoppingCartRowPosition))

        // Storing Data from Shopping Cart products nth=0
        const firstCartProductData = await authEcommerce_actions.GetProductDataByCartPosition(shoppingCartRow)

        // Expect Remove button to be displayed
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.buttonRemoveAnyCartItem)

        // Expect Quantity to be 1
        await GenericMethods.assertion_ValueToBe(firstCartProductData.quantity, expectedQuantity)

        // Expect Data from Clicked to be equal to data from Added
        await authEcommerce_actions.CompareCardWithCart(firstProductCardData, firstCartProductData)

    })

    test('Remove an Item From Shopping Cart', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Test Data
        const shoppingCartRowPosition = 1
        const productPosition = 0

        // Adding first product to cart (nth=0)
        await authEcommerce_actions.AddProductToShoppingCartByPosition(productPosition)

        // Verifying if Shopping Cart row was created (0=Header, Product>=1)
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.containerAnyRowCartItem.nth(shoppingCartRowPosition))

        // Expect Remove button to be displayed
        await GenericMethods.assertion_ElementToBeVisible(authEcommerce_elements.buttonRemoveAnyCartItem.nth(productPosition))

        // Click Remove
        await GenericMethods.clickOn(authEcommerce_elements.buttonRemoveAnyCartItem.nth(productPosition))

        // Assertion Shopping Cart row is removed
        await GenericMethods.assertion_ElementToNotBeVisible(authEcommerce_elements.containerAnyRowCartItem.nth(shoppingCartRowPosition))

    })

    test('Add Multiples Items to the Shopping Cart', async ({ authEcommerce_elements, authEcommerce_actions, GenericMethods }) => {

        // Test Data
        const  firstProductsCardPosition = 0
        const  secondProductsCardPosition = 1
        const  thirdProductsCardPosition = 2
        const firstProductCartPosition = 0
        const secondProductCartPosition = 1
        const thirdProductCartPosition = 2
        const eachProductExpectedQuantity = '1'

        // Storing Products Data from Cards
        const firstProductCard = await authEcommerce_actions.GetProductDataByCardPosition(firstProductsCardPosition)

        // Storing Products Data from Cards
        const secondProductCard = await authEcommerce_actions.GetProductDataByCardPosition(secondProductsCardPosition)

        // Storing Products Data from Cards
        const thirdProductCard = await authEcommerce_actions.GetProductDataByCardPosition(thirdProductsCardPosition)

        // Calc Final Price
        const finalCalcPrice = await authEcommerce_actions.CalculateTotalPrice(
            parseFloat(firstProductCard.price.replace(/[^0-9.]/g, "")),
            parseFloat(secondProductCard.price.replace(/[^0-9.]/g, "")),
            parseFloat(thirdProductCard.price.replace(/[^0-9.]/g, ""))
        )

        // Adding first product to cart (nth=0)
        await authEcommerce_actions.AddProductToShoppingCartByPosition(firstProductsCardPosition)

        // Adding 2nd product to cart (nth=1)
        await authEcommerce_actions.AddProductToShoppingCartByPosition(secondProductsCardPosition)

        // Adding 3rd product to cart (nth=2)
        await authEcommerce_actions.AddProductToShoppingCartByPosition(thirdProductsCardPosition)

        // Retrieving Cart Data
        const firstProductCart = await authEcommerce_actions.GetProductDataByCartPosition(firstProductCartPosition)

        // Retrieving Cart Data
        const secondProductCart = await authEcommerce_actions.GetProductDataByCartPosition(secondProductCartPosition)

        // Retrieving Cart Data
        const thirdProductCart = await authEcommerce_actions.GetProductDataByCartPosition(thirdProductCartPosition)

        // Comparing Card 1st with Cart 1st - Has to Match
        await GenericMethods.assertion_ValueToBe(firstProductCart.quantity, eachProductExpectedQuantity)
        await authEcommerce_actions.CompareCardWithCart(firstProductCard, firstProductCart)

        // Comparing Card 1st with Cart 1st - Has to Match
        await GenericMethods.assertion_ValueToBe(secondProductCart.quantity, eachProductExpectedQuantity)   
        await authEcommerce_actions.CompareCardWithCart(secondProductCard, secondProductCart)

        // Comparing Card 1st with Cart 1st - Has to Match
        await GenericMethods.assertion_ValueToBe(thirdProductCart.quantity, eachProductExpectedQuantity)
        await authEcommerce_actions.CompareCardWithCart(thirdProductCard, thirdProductCart)

        // Retrieving Final Price from UI
        const finalPrice = await authEcommerce_actions.getPriceFromText(authEcommerce_elements.cartTotalPrice)
        
        // Has to match price calc
        await GenericMethods.assertion_ValueToBe(finalPrice.valueOf.toString(), finalCalcPrice.valueOf.toString())

    })

})