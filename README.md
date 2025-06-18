# cucumber-bs-js-example

Run Cucumber JS tests on BrowserStack using Selenium WebDriver.

## Project Structure

```
.
├── config/
│   └── browserstack.json
├── features/
│   ├── example.feature
│   ├── step_definitions/
│   │   └── steps.js
│   └── support/
│       └── world.js
├── package.json
└── .gitignore
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v12+ recommended)
- [BrowserStack account](https://www.browserstack.com/)
- BrowserStack credentials set in `config/browserstack.json` and `features/step_definitions/steps.js`

## Installation

```sh
npm install
```

## Configuration

- Update `config/browserstack.json` with your desired capabilities and credentials.
- The test step in [`features/step_definitions/steps.js`](features/step_definitions/steps.js) currently uses hardcoded credentials and device settings for iPhone 12 Safari. You may want to update these or refactor to use the config file.

## Running Tests

```sh
npm test
```

This will run the Cucumber JS tests defined in [`features/example.feature`](features/example.feature) on BrowserStack.

## Files Overview

- [`features/example.feature`](features/example.feature): Example feature file with a scenario to open Google.
- [`features/step_definitions/steps.js`](features/step_definitions/steps.js): Step definitions using Selenium WebDriver and BrowserStack.
- [`features/support/world.js`](features/support/world.js): Custom Cucumber World (currently empty).
- [`config/browserstack.json`](config/browserstack.json): BrowserStack server and capabilities configuration.

## Notes

- Make sure your BrowserStack credentials are kept secure and not committed to public repositories.
- You can add more scenarios and step definitions as needed.

##