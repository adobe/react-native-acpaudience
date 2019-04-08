/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
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
 **************************************************************************/
 
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
