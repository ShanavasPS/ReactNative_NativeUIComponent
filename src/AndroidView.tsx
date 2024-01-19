import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { UIManager, findNodeHandle, requireNativeComponent, ViewStyle, StyleProp } from 'react-native';

interface AndroidViewProps {
  style?: StyleProp<ViewStyle>;
}

const ANDROID_VIEW_MANAGER: string = "MyViewManager";
const CREATE_COMMAND: string = "create";
const SEND_TO_NATIVE_COMMAND: string = "sendToNative";

const AndroidView = forwardRef<any, AndroidViewProps>((props, ref) => {

  useImperativeHandle(ref, () => ({
    sendToNative,
  }));

  const componentRef = useRef<any>(null);

  const dispatchToAndroid = (command: string, params: any[] = []) => {
    const viewId = findNodeHandle(componentRef.current);
    UIManager.dispatchViewManagerCommand(
      viewId,
      UIManager.getViewManagerConfig(ANDROID_VIEW_MANAGER).Commands[command].toString(),
      [viewId, ...params],
    );
  }

  const sendToNative = (tab: string) => {
    dispatchToAndroid(SEND_TO_NATIVE_COMMAND, [tab]);
  }

  const createFragment = () => {
    dispatchToAndroid(CREATE_COMMAND);
  };

  useEffect(() => {
      createFragment();
  }, []);

  return <MyViewManagerNative style={props.style} ref={componentRef} />;
});

const MyViewManagerNative = requireNativeComponent<AndroidViewProps>(ANDROID_VIEW_MANAGER);

export default AndroidView;
