//
//  CustomModule.h
//  DisplayNativeView
//
//  Created by Shanavas Shaji on 13/01/24.
//

#ifndef CustomModule_h
#define CustomModule_h

#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>

@interface CustomModule : RCTEventEmitter <RCTBridgeModule>
- (void)generateRandomNumber;
@end

#endif /* CustomModule_h */
