// Fixture Importing List
import { test as base } from '@playwright/test'
import { GenericMethods } from '@Actions/GenericMethods'
import { AuthEcommerce_Elements } from '@Pages/ecommerce/ecommerce_elements'
import { AuthEcommerce_Actions } from '@Actions/ecommerce/ecommerce_actions'
import { BugForm_Elements } from '@Pages/bugs-form/bugs-form_elements'
import { BugForm_Actions } from '@Actions/bugs-form/bugs-form_actions'
import { Buttons_Elements } from '@Pages/buttons/buttons'
import { Buttons_Actions } from '@Actions/buttons/buttons'

// Declaring Fixtures list
type MyFixtures = {
    GenericMethods: GenericMethods,
    authEcommerce_elements: AuthEcommerce_Elements,
    authEcommerce_actions: AuthEcommerce_Actions,
    BugForm_Elements: BugForm_Elements,
    BugForm_Actions: BugForm_Actions,
    Buttons_Elements: Buttons_Elements,
    Buttons_Actions: Buttons_Actions
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
    },
    BugForm_Elements: async ({ page }, use) => {
        const bugForm_Elements = new BugForm_Elements(page)
        await use(bugForm_Elements)
    },
    BugForm_Actions: async ({ page }, use) => {
        const bugForm_Actions = new BugForm_Actions(page)
        await use(bugForm_Actions)
    },
    Buttons_Actions: async ({ page }, use) => {
        const buttons_Actions = new Buttons_Actions(page)
        await use(buttons_Actions)
    },
    Buttons_Elements: async ({ page }, use) => {
        const buttons_Elements = new Buttons_Elements(page)
        await use(buttons_Elements)
    }

})

// Exporting back the default expect
export { expect } from '@playwright/test'