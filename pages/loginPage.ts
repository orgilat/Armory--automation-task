import { Page, Locator, expect } from '@playwright/test';
import logger from '../logger';  

/**
 * LoginPage class represents the Login screen of the application.
 * Each variable and method corresponds to an element or action on the page.
 */
export class LoginPage {
  readonly page: Page;           // Playwright Page object representing the browser tab
  readonly emailInput: Locator;  // Locator for the email input field
  readonly nextButton: Locator;  // Locator for the "Next" button
  readonly invalidFeedback: Locator; // Locator for error feedback div if shown

  /**
   * Constructor initializes locators for page elements.
   * @param page Playwright page instance
   */
  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator("input[name='email']");       // Locate email input by name attribute
    this.nextButton = page.locator("button[type='submit']");     // Locate submit button
    this.invalidFeedback = page.locator('div.invalid-feedback'); // Error message container
  }

 
  //  Navigates to the login page URL.
   
  async goto() {
    logger.info('Navigating to login page');
    await this.page.goto('https://app.armorydefense.com/auth/login');
  }

  
   //Asserts email input and Next button are visible.
   
  async expectEmailAndButtonVisible() {
    logger.info('Checking if email input and next button are visible');
    await expect(this.emailInput).toBeVisible();
    await expect(this.nextButton).toBeVisible();
  }

   //Asserts the Next button is disabled.
   
  async expectNextButtonDisabled() {
    logger.info('Checking if next button is disabled');
    await expect(this.nextButton).toBeDisabled();
  }

  
    //Asserts the Next button is enabled.
   
  async expectNextButtonEnabled() {
    logger.info('Checking if next button is enabled');
    await expect(this.nextButton).toBeEnabled();
  }

  
  //Fills the email input field with the provided email.
 
   
  async fillEmail(email: string) {
    logger.info(`Filling email input with: ${email}`);
    await this.emailInput.fill(email);
  }

   //Clicks the Next button.
   
  async clickNext() {
    logger.info('Clicking the next button');
    await this.nextButton.click();
  }

  
    //Asserts that the page navigated to the password page.
 
  async expectAtPasswordPage() {
    logger.info('Verifying navigation to password page');
    await expect(this.page).toHaveURL('https://app.armorydefense.com/auth/password');
  }

   //Asserts that the page is still on the login page.
   
async expectStillAtLoginPage() {
  logger.info('Verifying still on login page');
  await this.page.waitForTimeout(2000);  
  await expect(this.page).toHaveURL('https://app.armorydefense.com/auth/login');
}

}
