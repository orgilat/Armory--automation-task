import { test, expect } from '../fixtures/loginFixture';
import { allure } from 'allure-playwright';

test.describe('Login Page Tests', () => {

  test('1. Email input and Next button visible (Suite 1.1, 1.2)', async ({ loginPage }) => {
    await allure.step('Check email input and Next button are visible', async () => {
      await loginPage.expectEmailAndButtonVisible(); // Check if email input and next button are visible
    });
  });

  test('2. Next button disabled initially (Suite 1.4 - initial state)', async ({ loginPage }) => {
    await allure.step('Check Next button is disabled initially', async () => {
      await loginPage.expectNextButtonDisabled(); // Ensure the next button is initially disabled
    });
  });

  test('3. Next button enabled with valid email (Suite 1.4 - valid email)', async ({ loginPage }) => {
    await allure.step('Fill valid email and check Next button enabled', async () => {
      await loginPage.fillEmail('value'); // Enter a valid email
      await loginPage.expectNextButtonEnabled(); // Check if the next button is now enabled
    });
  });

  test('4. Next button enabled with invalid email "or@" (Suite 1.4 - invalid email UI state)', async ({ loginPage }) => {
    await allure.step('Fill invalid email "or@" and check Next button enabled', async () => {
      await loginPage.fillEmail('or@'); // Enter an invalid email format
      await loginPage.expectNextButtonEnabled(); // Still expect button to be enabled for UI flow
    });
  });

  test('5. Valid email navigates to password page (Suite 1.3, 2.1 - valid email)', async ({ loginPage }) => {
    await allure.step('Submit valid email and expect password page', async () => {
      await loginPage.fillEmail('user@example.com'); // Fill in a valid user email
      await loginPage.expectNextButtonEnabled();     // Expect button to be enabled
      await loginPage.clickNext();                   // Click the next button
      await loginPage.expectAtPasswordPage();        // Ensure we're navigated to the password page
    });
  });

  test('6. Invalid email "armory@a" stays on login page (Bonus 1 - Invalid Email Format)', async ({ loginPage }) => {
    await allure.step('Submit invalid email and expect to stay on login page', async () => {
      await loginPage.fillEmail('armory@a');         // Enter invalid email (domain too short)
      await loginPage.expectNextButtonEnabled();     // Expect button to be enabled
      await loginPage.clickNext();                   // Click next
      await loginPage.expectStillAtLoginPage();      // Expect not to navigate
    });
  });

  test('7. Email with spaces enables Next and navigates (Bonus 2 - Email trimming)', async ({ loginPage }) => {
    await allure.step('Fill email with spaces and check navigation', async () => {
      await loginPage.fillEmail(' user@example.com '); // Email with leading/trailing spaces
      await loginPage.expectNextButtonEnabled();       // Button should still enable
      await loginPage.clickNext();                     // Submit
      await loginPage.expectAtPasswordPage();          // Expect navigation
    });
  });

  test('8. Case insensitive email enables Next and navigates (Bonus 3 - Case Insensitivity)', async ({ loginPage }) => {
    await allure.step('Fill case insensitive email and check navigation', async () => {
      await loginPage.fillEmail('User@Example.COM'); // Use email with mixed casing
      await loginPage.expectNextButtonEnabled();     // Button should enable
      await loginPage.clickNext();                   // Submit
      await loginPage.expectAtPasswordPage();        // Expect to reach password page
    });
  });

});
