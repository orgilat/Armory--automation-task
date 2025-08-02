# Armory Automation Task – Login Flow Testing

##  What’s Tested

- Suite 1.1 & 1.2: Email input and "Next" button visibility  
- Suite 1.4 (initial state, valid, invalid email UI states): "Next" button enabled/disabled behavior  
- Suite 1.3 & 2.1: Valid email submission and navigation to password page  
- Bonus 1: Invalid email format handling  
- Bonus 2: Email trimming of leading/trailing spaces  
- Bonus 3: Email case insensitivity handling

## Technologies Used

- **Playwright**: for end-to-end testing with powerful browser automation.  
- **POM (Page Object Model)**: tests use the POM pattern to keep code modular, reusable, and maintainable.  
- **Winston**: logging library for structured and informative logs during test execution.  
- **Allure**: advanced reporting tool integrated to generate detailed test reports with steps, attachments, and screenshots.

---

## Test Results

- Total tests run: 8  
- Passed: 7  
- Failed: 1 (exposed a small real bug related to invalid email handling)  
- 3 screenshots were captured and attached to Allure reports for easy debugging and visual verification.  

You can view these screenshots and detailed test execution results directly through the GitHub Actions Allure report artifacts.

---

## CI Integration

The project uses a GitHub Actions workflow (`.github/workflows/playwright.yml`) that:

- Checks out the repository  
- Sets up Node.js (version 20)  
- Installs dependencies using `npm ci`  
- Installs Playwright browsers and dependencies  
- Runs the tests via `npx playwright test`  
- Generates an Allure report from test results  
- Uploads the Allure report as an artifact for review

