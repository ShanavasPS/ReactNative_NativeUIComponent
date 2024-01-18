import React, {useEffect, useState, useRef} from 'react';

import {
  StyleSheet,
  View,
  PixelRatio,
  Text,
  DeviceEventEmitter,
  Platform,
  NativeModules,
  NativeEventEmitter,
  TouchableOpacity,
} from 'react-native';

import AndroidView from './src/AndroidView';
import IOSView from './src/IOSView';

const {RTEEventEmitter} = NativeModules;

const App = () => {
  const [randomText, setRandomText] = useState('0');
  const ref = useRef<any>(null);

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

  const handleButtonPress = (tab: string) => {
    ref.current?.sendToNative(tab);
  };

  return (
    <View style={styles.container}>
      {/* View 1: Takes up the rest of the space */}
      <View style={styles.view1}>
        {Platform.OS === 'android' ? (
          <AndroidView style={styles.androidView} ref={ref}/>
        ) : (
          <IOSView style={styles.iosView} ref={ref} />
        )}
      </View>

      {/* View 2: Fixed height at the bottom */}
      <View style={styles.view2}>
        <Text style={styles.centeredText}>Result on RN Side: {randomText}</Text>
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.bottomBarButton}
            onPress={() => handleButtonPress('Home')}>
            <Text style={styles.bottomBarButtonText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomBarButton}
            onPress={() => handleButtonPress('Feed')}>
            <Text style={styles.bottomBarButtonText}>Feed</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomBarButton}
            onPress={() => handleButtonPress('Activity')}>
            <Text style={styles.bottomBarButtonText}>Activity</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomBarButton}
            onPress={() => handleButtonPress('Profile')}>
            <Text style={styles.bottomBarButtonText}>Profile</Text>
          </TouchableOpacity>
        </View>
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
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 20,
    top: 20,
    marginBottom: 20,
  },
  bottomBarButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#3498db', // Adjust the button background color as needed
    borderRadius: 5,
    marginHorizontal: 5,
  },
  bottomBarButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
