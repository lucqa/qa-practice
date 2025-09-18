import { test as setup } from '@playwright/test'

setup('Project Information', async () => {
  console.log(`
    ===============================================================================
    This project was built for learning and exploratory purposes.
    Bug-form Page has intentionally setup multiple bugs. Impacted tests are marked and skipped for didactive purposes.
    ===============================================================================
    Known issues on bug-form Page:
    1. Many label locators are using the same attribute for, using numbered locatores are not recommended but may work as a workaround.
    2. Phone number label has a typo, UI Validation test case will fail
    3. Terms and Conditions Check Box is disabled, thus not clickable by default - using JS to remove disabled attribute as a workaround
    4. Last Name results is removing last letter from input
    5. Phone number results is increasing +1 from input
    6. Last Name should be mandatory but it it's implementation is as optional
    7. Terms and Conditions should be mandatory but its implementation is as option
    8. Email should be mandatory but it is optional
    9. Phone number accepts letters when it shouldnt
    10. Email input is not validated (accepts invalid emails)
    11. Password input is not validated
    ===============================================================================\n`)
})