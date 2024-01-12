import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PixelRatio,
    UIManager,
    findNodeHandle,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {MyViewManager} from './MyViewManager'

const createFragment = viewId =>
  UIManager.dispatchViewManagerCommand(
    viewId,
    // we are calling the 'create' command
    UIManager.MyViewManager.Commands.create.toString(),
    [viewId],
  );

const App = () => {
const ref = useRef(null);

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
      const viewId = findNodeHandle(ref.current);
      createFragment(viewId);
    }, []);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <MyViewManager
                style={{
                  // converts dpi to px, provide desired height
                  height: PixelRatio.getPixelSizeForLayoutSize(200),
                  // converts dpi to px, provide desired width
                  width: PixelRatio.getPixelSizeForLayoutSize(200),
                }}
                ref={ref}
              />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  myViewManager: {
      width: 800,
      height: 600,
      backgroundColor: 'red'
    },
});

export default App;
