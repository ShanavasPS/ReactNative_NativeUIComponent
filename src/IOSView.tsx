import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import {
  StyleProp,
  UIManager,
  ViewStyle,
  findNodeHandle,
  requireNativeComponent,
} from 'react-native';

const IOSView = forwardRef<any, {style: StyleProp<ViewStyle>}>((props, ref) => {
  useImperativeHandle(ref, () => ({
    sendToNative,
  }));

  const componentRef = useRef<any>(null);

  const sendToNative = (tab: string) => {
    const viewId = findNodeHandle(componentRef.current);
    UIManager.dispatchViewManagerCommand(
      viewId,
      UIManager.getViewManagerConfig('IOSView').Commands.sendToNative,
      [tab],
    );
  };

  return <IOSViewNative style={props.style} ref={componentRef} />;
});

const IOSViewNative = requireNativeComponent('IOSView');

export default IOSView;
