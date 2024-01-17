import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { UIManager, findNodeHandle, requireNativeComponent, ViewStyle, StyleProp, View, Alert } from 'react-native';

interface MyViewManagerProps {
  style?: StyleProp<ViewStyle>;
}

const AndroidView = forwardRef<any, {style: StyleProp<ViewStyle>}>((props, ref) => {

  useImperativeHandle(ref, () => ({
    sendToNative,
  }));

  const componentRef = useRef<any>(null);

  const sendToNative = (tab: string) => {
    const viewId = findNodeHandle(componentRef.current);
    UIManager.dispatchViewManagerCommand(
      viewId,
      UIManager.getViewManagerConfig('MyViewManager').Commands.sendToNative.toString(),
      [viewId, tab],
    );
  }

  const createFragment = (viewId: number | null) => {
    UIManager.dispatchViewManagerCommand(
      viewId,
      UIManager.getViewManagerConfig('MyViewManager').Commands.create.toString(),
      [viewId],
    );
  };

  useEffect(() => {
      const viewId = findNodeHandle(componentRef.current);
      createFragment(viewId);
  }, []);

  return <MyViewManagerNative style={props.style} ref={componentRef} />;
});

const MyViewManagerNative = requireNativeComponent<MyViewManagerProps>('MyViewManager'); // Ensure correct typing

export default AndroidView;
