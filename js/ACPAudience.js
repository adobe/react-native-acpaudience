/** ***********************************************************************
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
*
* @flow
* @format
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
