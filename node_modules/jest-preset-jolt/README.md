# jest-preset-jolt

[![npm](https://img.shields.io/npm/v/jest-preset-jolt.svg)](https://www.npmjs.com/package/jest-preset-jolt)
[![npm](https://img.shields.io/npm/dt/jest-preset-jolt.svg)](https://www.npmjs.com/package/jest-preset-jolt)
[![npm](https://img.shields.io/npm/l/jest-preset-jolt.svg)](https://github.com/negativetwelve/jolt/blob/master/LICENSE)

Default jest configuration for jolt packages.

## Getting Started

Install `jest-preset-jolt` using `yarn`:

```shell
yarn add --dev jest-preset-jolt
```

## Usage

Add the package as a preset for your jest configuration. In your `package.json`:

```json
"jest": {
  "preset": "jest-preset-jolt"
}
```

*NOTE* If you have a custom `jest` config and you override `setupTestFrameworkScriptFile` in your config, you'll have to import the preset's setup function at the top of your `setupTestFrameworkScriptFile` file:

```javascript
import 'jest-preset-jolt/setup';
```
