import React, { useEffect, useState } from 'react';
import { StyleSheet, View, PixelRatio, Text, DeviceEventEmitter, Platform  } from 'react-native';

import AndroidView from './AndroidView';

const App = () => {
  const [randomText, setRandomText] = useState('0');

  const eventEmitter =
  Platform.OS === 'android'
    ? DeviceEventEmitter
    : DeviceEventEmitter;

    useEffect(() => {
      const subscription = eventEmitter.addListener(
        'onRandomTextUpdate',
        newRandomText => {
          setRandomText(newRandomText);
        },
      );
      return () => subscription.remove();
    }, [eventEmitter]);

  return (
    <View style={styles.container}>
      {/* View 1: Takes up the rest of the space */}
      <View style={styles.view1}>
        <AndroidView style={styles.androidView} />
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
  androidView: {
    height: PixelRatio.getPixelSizeForLayoutSize(600),
    width: PixelRatio.getPixelSizeForLayoutSize(400),
  },
  view1: {
    flex: 1,
    height: '100%',
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
