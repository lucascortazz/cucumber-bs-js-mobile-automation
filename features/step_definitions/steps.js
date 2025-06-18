const { Given, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');

let driver;

Given('I open the Google homepage', { timeout: 30000 }, async function () {
  driver = new Builder()
    .usingServer('https://lucascortazzo_0PnpTu:ws3h1V2aD5Ann4yuD5xR@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      'browserName': 'Safari',
      'device': 'iPhone 12',
      'realMobile': 'true',
      'os_version': '14.0',
      'name': 'Cucumber JS - iPhone 12 Safari Test'
    })
    .build();

  await driver.get('https://www.google.com');
});

Then('the title should contain {string}', async function (expectedTitle) {
  const title = await driver.getTitle();
  if (!title.includes(expectedTitle)) {
    throw new Error(`Title "${title}" does not contain "${expectedTitle}"`);
  }
  await driver.quit();
});
