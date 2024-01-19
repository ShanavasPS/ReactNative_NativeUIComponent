import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { UIManager, findNodeHandle, requireNativeComponent, ViewStyle, StyleProp } from 'react-native';

interface MyViewManagerProps {
  style?: StyleProp<ViewStyle>;
}

const AndroidView = forwardRef<any, {style: StyleProp<ViewStyle>}>((props, ref) => {

  useImperativeHandle(ref, () => ({
    sendToNative,
  }));

  const componentRef = useRef<any>(null);

  const dispatchToAndroid = (command: string, params: any[] = []) => {
    const viewId = findNodeHandle(componentRef.current);
    UIManager.dispatchViewManagerCommand(
      viewId,
      UIManager.getViewManagerConfig('MyViewManager').Commands[command].toString(),
      [viewId, ...params],
    );
  }

  const sendToNative = (tab: string) => {
    dispatchToAndroid('sendToNative', [tab]);
  }

  const createFragment = () => {
    dispatchToAndroid('create');
  };

  useEffect(() => {
      createFragment();
  }, []);

  return <MyViewManagerNative style={props.style} ref={componentRef} />;
});

const MyViewManagerNative = requireNativeComponent<MyViewManagerProps>('MyViewManager'); // Ensure correct typing

export default AndroidView;
