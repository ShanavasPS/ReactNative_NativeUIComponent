import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  PixelRatio,
  Text,
  DeviceEventEmitter,
  Platform,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

import AndroidView from './src/AndroidView';
import IOSView from './src/IOSView';

const {RTEEventEmitter} = NativeModules;

const App = () => {
  const [randomText, setRandomText] = useState('0');

  useEffect(() => {
    const eventEmitter =
      Platform.OS === 'android'
        ? DeviceEventEmitter
        : new NativeEventEmitter(RTEEventEmitter);

    const subscription = eventEmitter.addListener(
      'onRandomTextUpdate',
      newRandomText => {
        Platform.OS === 'android'
          ? setRandomText(newRandomText)
          : setRandomText(newRandomText.data);
      },
    );
    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      {/* View 1: Takes up the rest of the space */}
      <View style={styles.view1}>
        {Platform.OS === 'android' ? (
          <AndroidView style={styles.androidView} />
        ) : (
          <IOSView style={styles.iosView} />
        )}
      </View>

      {/* View 2: Fixed height at the bottom */}
      <View style={styles.view2}>
        <Text style={styles.centeredText}>Result on RN Side: {randomText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100%',
  },
  iosView: {
    width: '100%',
    height: 600,
    justifyContent: 'center', // Align items with space between them
    alignItems: 'center',
    top: 50,
  },
  androidView: {
    height: PixelRatio.getPixelSizeForLayoutSize(600),
    width: PixelRatio.getPixelSizeForLayoutSize(400),
  },
  view1: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#5FD3F3',
    alignItems: 'center',
  },
  view2: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
