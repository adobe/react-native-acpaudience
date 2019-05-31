
# React Native AEP Audience Extension

[![npm version](https://badge.fury.io/js/%40adobe%2Freact-native-acpaudience.svg)](https://badge.fury.io/js/%40adobe%2Freact-native-acpaudience) [![CircleCI](https://img.shields.io/circleci/project/github/adobe/react-native-acpaudience/master.svg?logo=circleci)](https://circleci.com/gh/adobe/workflows/react-native-acpaudience) ![NPM](https://img.shields.io/npm/l/@adobe/react-native-acpaudience.svg)

`@adobe/react-native-acpaudience` is a wrapper around the iOS and Android [AEP Audience Manager SDK](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-audience-manager) to allow for integration with React Native applications. Functionality to enable Adobe Audience Manager is provided entirely through JavaScript documented below.


## Installation

You need to install the SDK with [npm](https://www.npmjs.com/) and configure the native Android/iOS project in your react native project. Before installing the Audience extension it is recommended to begin by installing the Core extension `@adobe/react-native-acpcore`.

> Note: If you are new to React Native we suggest you follow the [React Native Getting Started](<https://facebook.github.io/react-native/docs/getting-started.html>) page before continuing.

### 1. Create React Native project

First create a React Native project:

```bash
react-native init MyReactApp
```

### 2. Install JavaScript packages

Install and link the `@adobe/react-native-acpaudience` package:

```bash
cd MyReactApp
npm install @adobe/react-native-acpaudience
react-native link @adobe/react-native-acpaudience
```

## Tests
This project contains jest unit tests which are contained in the `__tests__` directory, to run the tests locally:
```
make run-tests-locally
```

## Usage

### [Audience Manager](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-audience-manager)

##### Importing the extension:
```javascript
import {ACPAudience} from '@adobe/react-native-acpaudience';
```

##### Getting the extension version:

```javascript
ACPAudience.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPAudience version: " + version));
```

##### Registering the extension with ACPCore:

```javascript
ACPAudience.registerExtension();
```

##### Send signals to Audience Manager:
```javascript
ACPAudience.signalWithData({"yourDataKey": "yourDataValue"}).then(profile => console.log("AdobeExperienceSDK: Visitor Profile: " + profile));
```

##### Reset identifiers and profiles:
```javascript
ACPAudience.reset();
```

##### Get the visitor profile:
```javascript
ACPAudience.getVisitorProfile().then(profile => console.log("AdobeExperienceSDK: Visitor Profile: " + profile));
```

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md)

## License
See [LICENSE](LICENSE)
