/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.

@flow
@format
*/
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, NativeModules} from 'react-native';
import {ACPCore} from '@adobe/react-native-acpcore';
import {ACPAudience} from '@adobe/react-native-acpaudience';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ marginTop: 75 }}>
        <Text style={styles.welcome}>ACPAudience Test App</Text>
        <Button title="ACPCore::extensionVersion()" onPress={() => this.coreExtensionVersion()}/>
        <Button title="ACPAudience::extensionVersion()" onPress={() => this.audienceExtensionVersion()}/>
        <Button title="ACPAudience::reset()" onPress={() => this.resetAudience()}/>
        <Button title="ACPAudience::getVisitorProfile()" onPress={() => this.getVisitorProfile()}/>
        <Button title="ACPAudience::signalWithData(...)" onPress={() => this.signalWithData()}/>

        </ScrollView>
      </View>
    );
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