/*
Copyright 2019 Adobe. All rights reserved.
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

'use strict';

const RCTACPAudience = require('react-native').NativeModules.ACPAudience;

module.exports = {
  /**
   * @brief Returns the current version of the ACPAudience Extension.
   */
  extensionVersion(): Promise<string> {
    return Promise.resolve(RCTACPAudience.extensionVersion());
  },

  /**
   * @brief Registers the ACPAudience extension with the Core Event Hub.
   */
  registerExtension() {
    RCTACPAudience.registerExtension();
  },

  /**
   * @brief Resets the Audience Manager UUID and purges the current visitor profile from NSUserDefaults.
   * @discussion Audience reset also clears the current in-memory DPID and DPUUID variables.
   */
  reset() {
    RCTACPAudience.reset();
  },

  /**
   * @brief Returns the visitor profile that was most recently obtained.
   * @discussion Visitor profile is saved in NSUserDefaults for easy access across multiple launches of your app.
   *             If no signal has been submitted, nil is returned.
   *
   * @param callback void method invoked with the visitor's profile as a parameter
   */
  getVisitorProfile(): Promise<{ string: string }> {
    return RCTACPAudience.getVisitorProfile();
  },

  /**
   * @brief Sends Audience Manager a signal with traits and returns the matching segments for the visitor in a callback.
   * @discussion Audience manager sends AAM UUID in response in initial signal call. AAM UUID is persisted in
   *             NSUserDefaults and sent by SDK in all subsequent signal requests. If available, Experience Cloud ID (MID) is
   *             also sent in each signal request along with DPID and DPUUID. The visitor profile that AAM returns is
   *             saved in NSUserDefaults and updated with every signal call.
   *
   * @param data Traits data for the current visitor
   * @param callback void method invoked with the visitor's profile as a parameter
   */
  signalWithData(data?: { string: string }): Promise<{ string: string }> {
    return RCTACPAudience.signalWithData(data);
  },
};
