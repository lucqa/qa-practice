// Fixture Importing List
import { test as base } from '@playwright/test'
import { AuthEcommerce } from '@Pages/ecommerce/ecommerce'

// Declaring Fixtures list
type MyFixtures = {
    authEcommerce: AuthEcommerce
}

// Extending test to include the Fixtures
export const test = base.extend<MyFixtures>({

    // Each Fixtures goes here
    authEcommerce: async ({ page }, use) => {
        const authEcommerce = new AuthEcommerce(page)
        await use(authEcommerce)
    }

})

// Exporting back the default expect
export { expect } from '@playwright/test'