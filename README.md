# Automation Practice with Playwright and Github Actions
This is a simple practice project for web automation testing.
## Technologies used:
- VS Code - https://code.visualstudio.com/
    - Extensions: 
        - Github Actions
        - Material Icon Theme
        - Playwright Test for VSCode
        - Prettier - Code formatter
        - Github Copilot
- NodeJS - https://nodejs.org/pt
- Playwright - https://playwright.dev/
- Dotenv - https://www.npmjs.com/package/dotenv
- Git - https://git-scm.com/
- Github - https://github.com/
- Test environment - https://qa-practice.netlify.app/
## Automation Projects definitions:
- Playwright native framework
- Custom pattern
- Typescript
- Multi-browser by default (Chromium, Webkit and Firefox)
- Matrix Multi-OS (Windows and Mac agents)
- Tests grouped in test.describe() blocks
- Tsconfig to page mapping
- Full parallel by default
- Headless execution by default
- Workers defined in .env
## Premises
- Page specific locators are stored in `/pages/{page_name}/{page_name}_elements.ts`
- Page specific methods are stored in `/actions/{page_name}/{page_name}_actions.ts`
- Generic methods are stored in `/actions/GenericMethods.ts`
- Global Setup is stored in `/tests/global.setup.ts`
- Fixtures defined in `my-test.ts`
## Getting Started
1. Install Git and NodeJS with npm (Recommended Version 22.15.0). Windows 10+ is recommended.
> https://nodejs.org/download/release/v22.15.0/

2. Clone this repository:
> git clone https://github.com/lucqa/qa-practice.git

3. Move inside qa-practice folder
4. Create .env in root folder:

>BASE_URL="https://qa-practice.netlify.app/" \
>CREDENCIAL_EMAIL="admin@admin.com" \
> CREDENCIAL_PASSWORD="admin123" \
> WORKERS="50%" \
> RETRIES=1
>
5. Run npm install to install dependencies
> npm install
6. Install Playwright
> npx playwright install
7. Run test execution (all browsers)
> npx playwright test
8. Run test execution against Chromium only
> npx playwright test --project=chromium
9. Run test execution against Webkit only
> npx playwright test --project=webkit
10. Run test execution against Chromium only
> npx playwright test --project=firefox
11. To run in headed mode add --headed
> npx playwright test --project=chromium --headed
12. To open last HTML report run:
> npx playwright show-report
## This is a WIP.
