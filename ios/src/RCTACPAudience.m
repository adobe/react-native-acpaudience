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

#import "RCTACPAudience.h"
#import "ACPAudience.h"

@implementation RCTACPAudience

RCT_EXPORT_MODULE(ACPAudience);

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(extensionVersion: (RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
    resolve([ACPAudience extensionVersion]);
}

RCT_EXPORT_METHOD(registerExtension) {
    [ACPAudience registerExtension];
}

RCT_EXPORT_METHOD(reset) {
    [ACPAudience reset];
}

RCT_EXPORT_METHOD(getVisitorProfile: (RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
    [ACPAudience getVisitorProfile:^(NSDictionary * _Nullable visitorProfile) {
        resolve(visitorProfile);
    }];
}

RCT_EXPORT_METHOD(signalWithData: (NSDictionary* __nullable) data
                  resolver:(RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
    [ACPAudience signalWithData:data callback:^(NSDictionary * _Nullable visitorProfile) {
        resolve(visitorProfile);
    }];
}


@end
  
