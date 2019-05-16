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
