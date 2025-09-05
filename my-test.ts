// Fixture Importing List
import { test as base } from '@playwright/test'
import { AuthEcommerce_Elements } from '@Pages/ecommerce/ecommerce_elements'
import { AuthEcommerce_Actions } from '@Actions/ecommerce/ecommerce_actions'
import { GenericMethods } from '@Actions/GenericMethods'

// Declaring Fixtures list
type MyFixtures = {
    authEcommerce_elements: AuthEcommerce_Elements,
    authEcommerce_actions: AuthEcommerce_Actions,
    GenericMethods: GenericMethods
}

// Extending test to include the Fixtures
export const test = base.extend<MyFixtures>({

    // Each Fixtures goes here
    authEcommerce_elements: async ({ page }, use) => {
        const authEcommerce_elements = new AuthEcommerce_Elements(page)
        await use(authEcommerce_elements)
    },
    authEcommerce_actions: async ({ page }, use) => {
        const authEcommerce_actions = new AuthEcommerce_Actions(page)
        await use(authEcommerce_actions)
    },
    GenericMethods: async ({ page }, use) => {
        const genericActions = new GenericMethods(page)
        await use(genericActions)
    }

})

// Exporting back the default expect
export { expect } from '@playwright/test'