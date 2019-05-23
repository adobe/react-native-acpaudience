/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.

@format
*/

import { NativeModules } from 'react-native';
import ACPAudience from '../js/ACPAudience';

describe('ACPAudience', () => {

  test('extensionVersion is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAudience, 'extensionVersion');
    await ACPAudience.extensionVersion();
    expect(spy).toHaveBeenCalled();
  });

  test('registerExtension is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAudience, 'registerExtension');
    await ACPAudience.registerExtension();
    expect(spy).toHaveBeenCalled();
  });

  test('rest is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAudience, 'reset');
    await ACPAudience.reset();
    expect(spy).toHaveBeenCalled();
  });

  test('getVisitorProfile is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAudience, 'getVisitorProfile');
    await ACPAudience.getVisitorProfile();
    expect(spy).toHaveBeenCalled();
  });

  test('signalWithData is called with correct parameters', async () => {
  const spy = jest.spyOn(NativeModules.ACPAudience, 'signalWithData');
    let data = {"testKey": "testValue"};
    await ACPAudience.signalWithData(data);
    expect(spy).toHaveBeenCalledWith(data);
  });

});
