# Automation Practice with Playwright and Github Actions
This is a simple practice project for web automation testing.
## Technologies used:
- VS Code - https://code.visualstudio.com/
    - Extensions: 
        - Github Actions
        - Material Icon Theme
        - Playwright Test for VSCode
        - Prettier - Code formatter
- NodeJS - https://nodejs.org/pt
- Playwright - https://playwright.dev/
- Dotenv - https://www.npmjs.com/package/dotenv
- Git - https://git-scm.com/
- Github - https://github.com/
- Test environment - https://qa-practice.netlify.app/
## Automation Projects definitions:
- Playwright native framework
- Typescript as language
- Multi-browser by default (Chromium, Webkit and Firefox)
- Page objects in ./pages folder
- Tests grouped in test.describe() blocks
- Tsconfig to page mapping
- .env set only for safer storing 'sensible' data
- Full parallel
- Headless execution
- Fixtures to improve code reusability
## Getting Started
1. Install Git and NodeJS with npm (Recommended Version 22.15.0)
> https://nodejs.org/download/release/v22.15.0/

2. Clone this repository:
> git clone https://github.com/lucqa/qa-practice.git

3. Move inside qa-practice folder
4. Set .env in root folder:

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
7. Run playwright
> npx playwright test
## This is a WIP.
