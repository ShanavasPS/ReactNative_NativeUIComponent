#import <React/RCTViewManager.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(IOSViewManager, RCTViewManager)
RCT_EXTERN_METHOD(
                  sendToNative: (nonnull NSNumber *)node
                  text: (NSString)text
                  )
@end
