/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, NativeModules} from 'react-native';
import {ACPCore, ACPLifecycle, ACPSignal, ACPIdentity, ACPMobileLogLevel, ACPMobilePrivacyStatus, ACPMobileVisitorAuthenticationState, ACPVisitorID, ACPExtensionEvent} from '@adobe/react-native-acpcore';
import {ACPAudience} from '@adobe/react-native-acpaudience';

type Props = {};
export default class App extends Component<Props> {
  render() {
    this.initSDK();
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ marginTop: 75 }}>
        <Text style={styles.welcome}>ACPAnalytics Test App</Text>
        <Button title="ACPCore::extensionVersion()" onPress={() => this.coreExtensionVersion()}/>
        <Button title="ACPAudience::extensionVersion()" onPress={() => this.audienceExtensionVersion()}/>
        <Button title="ACPAudience::reset()" onPress={() => this.resetAudience()}/>
        <Button title="ACPAudience::getVisitorProfile()" onPress={() => this.getVisitorProfile()}/>
        <Button title="ACPAudience::signalWithData(...)" onPress={() => this.signalWithData()}/>

        </ScrollView>
      </View>
    );
  }

  initSDK() {
    console.log("AdobeExperienceSDK IMPORT: ACPAudience = " + ACPAudience);
    ACPCore.setLogLevel(ACPMobileLogLevel.VERBOSE);
    ACPCore.setPrivacyStatus(ACPMobilePrivacyStatus.OPT_IN);
    ACPCore.configureWithAppId("launch-EN1a68f9bc5b3c475b8c232adc3f8011fb");
    ACPLifecycle.registerExtension();
    ACPIdentity.registerExtension();
    ACPSignal.registerExtension();
    ACPAudience.registerExtension();
    ACPCore.start();
  }

  coreExtensionVersion() {
    ACPCore.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPCore version: " + version));
  }

  audienceExtensionVersion() {
    ACPAudience.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPAudience version: " + version));
  }

  resetAudience() {
    ACPAudience.reset();
  }

  getVisitorProfile() {
    ACPAudience.getVisitorProfile().then(profile => console.log("AdobeExperienceSDK: Visitor Profile: " + profile));
  }

  signalWithData() {
    ACPAudience.signalWithData({"yourDataKey": "yourDataValue"}).then(profile => console.log("AdobeExperienceSDK: Visitor Profile: " + profile));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  }
});
