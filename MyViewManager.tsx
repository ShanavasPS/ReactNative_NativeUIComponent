import React, { useEffect, useRef } from 'react';
import { UIManager, findNodeHandle, requireNativeComponent, ViewStyle, StyleProp } from 'react-native';

interface MyViewManagerProps {
  style?: StyleProp<ViewStyle>;
}

const MyViewManager = ({ style }: MyViewManagerProps) => {
  const ref = useRef<any>(null);

  const createFragment = (viewId: number | null) => {
    UIManager.dispatchViewManagerCommand(
      viewId,
      UIManager.getViewManagerConfig('MyViewManager').Commands.create.toString(),
      [viewId],
    );
  };

  useEffect(() => {
    const viewId = findNodeHandle(ref.current);
    createFragment(viewId);
  }, []);

  return <MyViewManagerNative style={style} ref={ref} />;
};

const MyViewManagerNative = requireNativeComponent<MyViewManagerProps>('MyViewManager'); // Ensure correct typing

export default MyViewManager;
