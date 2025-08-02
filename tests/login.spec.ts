import { test, expect } from '../fixtures/loginFixture';
import { allure } from 'allure-playwright';

test.describe('Login Page Tests', () => {

  test('1. Email input and Next button visible', async ({ loginPage }) => {
    await allure.step('Check email input and Next button are visible', async () => {
      await loginPage.expectEmailAndButtonVisible();
    });
  });

  test('2. Next button disabled initially', async ({ loginPage }) => {
    await allure.step('Check Next button is disabled initially', async () => {
      await loginPage.expectNextButtonDisabled();
    });
  });

  test('3. Next button enabled with valid email', async ({ loginPage }) => {
    await allure.step('Fill valid email and check Next button enabled', async () => {
      await loginPage.fillEmail('value');
      await loginPage.expectNextButtonEnabled();
    });
  });

  test('4. Next button enabled with invalid email "or@"', async ({ loginPage }) => {
    await allure.step('Fill invalid email "or@" and check Next button enabled', async () => {
      await loginPage.fillEmail('or@');
      await loginPage.expectNextButtonEnabled();
    });
  });

  test('5. Valid email navigates to password page', async ({ loginPage }) => {
    await allure.step('Submit valid email and expect password page', async () => {
      await loginPage.fillEmail('user@example.com');
      await loginPage.expectNextButtonEnabled();
      await loginPage.clickNext();
      await loginPage.expectAtPasswordPage();
    });
  });

  test('6. Invalid email "armory@a" stays on login page', async ({ loginPage }) => {
    await allure.step('Submit invalid email and expect to stay on login page', async () => {
      await loginPage.fillEmail('armory@a');
      await loginPage.expectNextButtonEnabled();
      await loginPage.clickNext();
      await loginPage.expectStillAtLoginPage();
    });
  });

  test('7. Email with spaces enables Next and navigates', async ({ loginPage }) => {
    await allure.step('Fill email with spaces and check navigation', async () => {
      await loginPage.fillEmail(' user@example.com ');
      await loginPage.expectNextButtonEnabled();
      await loginPage.clickNext();
      await loginPage.expectAtPasswordPage();
    });
  });

  test('8. Case insensitive email enables Next and navigates', async ({ loginPage }) => {
    await allure.step('Fill case insensitive email and check navigation', async () => {
      await loginPage.fillEmail('User@Example.COM');
      await loginPage.expectNextButtonEnabled();
      await loginPage.clickNext();
      await loginPage.expectAtPasswordPage();
    });
  });

});
