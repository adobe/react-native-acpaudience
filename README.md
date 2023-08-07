# React Native AEP Audience Extension

## Notice of deprecation

Since *April 25, 2023*, [Apple has required](https://developer.apple.com/news/?id=jd9wcyov) apps submitted to the App Store to be built with Xcode 14.1 or later. The Experience Platform Mobile SDKs and extensions outlined below were built with prior versions of Xcode and are no longer compatible with iOS and iPadOS given Apple’s current App Store requirements. Consequently, on *August 31, 2023*, Adobe will be deprecating support for the following Experience Platform Mobile SDKs and wrapper extensions:

- [ACP iOS SDK](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#ios)
- [Cordova](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#cordova)
- [Flutter for ACP](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#flutter)
- [React Native for ACP](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#react-native)
- [Xamarin](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#xamarin)

After *August 31, 2023*, applications already submitted to the App Store that contain these SDKs and wrapper extensions will continue to operate, however, Adobe will not be providing security updates or bug fixes, and these SDKs and wrapper extensions will be provided as-is exclusive of any warranty, due to the App Store policy outlined above.

We encourage all customers to migrate to the latest Adobe Experience Platform versions of the Mobile SDK to ensure continued compatibility and support. Documentation for the latest versions of the Adobe Experience Platform Mobile SDKs can be found [here](https://developer.adobe.com/client-sdks/documentation/current-sdk-versions/). The iOS migration guide can be found [here](https://developer.adobe.com/client-sdks/previous-versions/documentation/migrate-to-swift/).

---

[![npm version](https://badge.fury.io/js/%40adobe%2Freact-native-acpaudience.svg)](https://www.npmjs.com/package/@adobe/react-native-acpaudience) 
[![npm downloads](https://img.shields.io/npm/dm/@adobe/react-native-acpaudience)](https://www.npmjs.com/package/@adobe/react-native-acpaudience)
[![CircleCI](https://img.shields.io/circleci/project/github/adobe/react-native-acpaudience/main.svg?logo=circleci)](https://circleci.com/gh/adobe/workflows/react-native-acpaudience) 
[![license](https://img.shields.io/npm/l/@adobe/react-native-acpaudience.svg)](https://github.com/adobe/react-native-acpaudience/blob/main/LICENSE)

`@adobe/react-native-acpaudience` is a wrapper around the iOS, tvOS and Android [AEP Audience Manager SDK](https://developer.adobe.com/client-sdks/previous-versions/documentation/adobe-audience-manager/) to allow for integration with React Native applications. Functionality to enable Adobe Audience Manager is provided entirely through JavaScript documented below.

## Installation

You need to install the SDK with [npm](https://www.npmjs.com/) and configure the native Android/iOS project in your react native project. Before installing the Audience extension it is recommended to begin by installing the [Core extension](https://github.com/adobe/react-native-acpcore).

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
```

#### 2.1 Link
- **React Native 0.60+**


[CLI autolink feature](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md) links the module while building the app.


- **React Native <= 0.59**


```bash
react-native link @adobe/react-native-acpaudience
```

*Note* For `iOS` using `cocoapods`, run:

```bash
cd ios/ && pod install
```

## Tests
This project contains jest unit tests which are contained in the `__tests__` directory, to run the tests locally:
```
make run-tests-locally
```

## Usage

### Audience Manager

##### Importing the extension:
```javascript
import {ACPAudience} from '@adobe/react-native-acpaudience';
```

##### Getting the extension version:

```javascript
ACPAudience.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPAudience version: " + version));
```

##### Registering the extension with ACPCore:

> Note: It is recommended to initialize the SDK via native code inside your AppDelegate and MainApplication in iOS and Android respectively. 

##### **iOS**
```objective-c
#import <RCTACPAudience/ACPAudience.h>

[ACPAudience registerExtension];
```

##### **Android:**
```java
import com.adobe.marketing.mobile.Audience;

Audience.registerExtension();
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
