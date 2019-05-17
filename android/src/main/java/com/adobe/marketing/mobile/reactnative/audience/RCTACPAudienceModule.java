/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
package com.adobe.marketing.mobile.reactnative.audience;

import android.util.Log;

import com.adobe.marketing.mobile.AdobeCallback;
import com.adobe.marketing.mobile.Audience;
import com.adobe.marketing.mobile.InvalidInitException;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;

import java.util.Map;

public class RCTACPAudienceModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RCTACPAudienceModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "ACPAudience";
  }

  @ReactMethod
  public void extensionVersion(final Promise promise) {
    promise.resolve(Audience.extensionVersion());
  }

  @ReactMethod
  public void registerExtension() {
    try {
      Audience.registerExtension();
    } catch (InvalidInitException e) {
      Log.d(getName(), "Registering Audience extension failed with error: " + e.getMessage());
    }
  }

  @ReactMethod
  public void reset() {
    Audience.reset();
  }

  @ReactMethod
  public void getVisitorProfile(final Promise promise) {
    Audience.getVisitorProfile(new AdobeCallback<Map<String, String>>() {
      @Override
      public void call(Map<String, String> stringStringMap) {
        promise.resolve(RCTACPAudienceMapUtil.toWritableMap(stringStringMap));
      }
    });
  }

  @ReactMethod
  public void signalWithData(final ReadableMap data, final Promise promise) {
    Audience.signalWithData(RCTACPAudienceMapUtil.toStringMap(data), new AdobeCallback<Map<String, String>>() {
      @Override
      public void call(Map<String, String> stringStringMap) {
        promise.resolve(RCTACPAudienceMapUtil.toWritableMap(stringStringMap));
      }
    });
  }


}
