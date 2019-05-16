
# React Native AEP Audience Extension

`@adobe/react-native-acpaudience` is a wrapper around the iOS and Android [AEP Audience Manager SDK](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-audience-manager) to allow for integration with React Native applications. Functionality to enable Adobe Audience Manager is provided entirely through JavaScript documented below.


## Installation

You need to install the SDK with [npm](https://www.npmjs.com/) and configure the native Android/iOS project in your react native project. Before installing the Audience extension it is recommended to begin by installing the Core extension `@adobe/react-native-acpcore`.

### 1. Create React Native project

First create a React Native project:

```bash
react-native init MyReactApp
```

### 2. Install JavaScript packages

Install and link the `@adobe/react-native-acpaudience` package:

```bash
npm install @adobe/react-native-acpaudience
react-native link @adobe/react-native-acpaudience
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
See [CONTRIBUTING](CONTRIBUTING)

## License
See [LICENSE](LICENSE)
