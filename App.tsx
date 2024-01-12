import React, {useEffect, useState, useRef} from 'react';
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
    NativeEventEmitter
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {MyViewManager} from './MyViewManager'
const myViewEventEmitter = new NativeEventEmitter(MyViewManager);

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
  const [randomText, setRandomText] = useState("0");

  const result = 72;
  useEffect(() => {
      const viewId = findNodeHandle(ref.current);
      createFragment(viewId);
      const subscription = myViewEventEmitter.addListener(
                  'onRandomTextUpdate',
                  (newRandomText) => {
                      setRandomText(newRandomText);
                  }
              );
      return () => subscription.remove();
    }, []);

  return (
          <View style={styles.container}>
            {/* View 1: Takes up the rest of the space */}
            <View style={styles.view1}>
              <MyViewManager
                style={{
                  // converts dpi to px, provide desired height
                  height: PixelRatio.getPixelSizeForLayoutSize(600),
                  // converts dpi to px, provide desired width
                  width: PixelRatio.getPixelSizeForLayoutSize(400),
                }}
                ref={ref}
              />
            </View>

            {/* View 2: Fixed height at the bottom */}
            <View style={styles.view2}>
              <Text style={styles.centeredText}>
              Result on RN Side: {randomText}
              </Text>
            </View>
          </View>
    );
  };

const styles = StyleSheet.create({
  myViewManager: {
      width: 800,
      height: 600,
      backgroundColor: 'red'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between', // Align items with space between them
        alignItems: 'flex-start',
        height: '100%',
      },
      view1: {
        flex: 1,
        backgroundColor: 'blue', // Set your desired background color
        height: '100%',
      },
      view2: {
        height: 100,
        width: '100%',
        justifyContent: 'center',
            alignItems: 'center',
        // Additional styling for View 2
      },
      centeredText: {
          textAlign: 'center',
          textAlignVertical: 'center',
          fontSize: 20,
         fontWeight: 'bold',
          // Additional styling for text if needed
        },
});

export default App;
