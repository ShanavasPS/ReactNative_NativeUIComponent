# React Native Native UI Component

A simple React Native app that displays the Kotlin Android Native UI view/Swift iOS UI View at the top and the React Native UI View at the bottom of the screen.

 - Kotlin Android Native UI/Swift iOS Native UI is shown on a sky blue background.
 - React Native UI View is shown at the bottom on a white background

The Kotlin Android Native UI/Swift iOS Native UI contains 4 UI elements:

1. Title label which shows the selected bottom bar button from React Native,
2. Label with a generated random number,
3. "Generate" button - every time the button is tapped, a new random number is displayed,
4. "Send to RN” button - every time the button is tapped, the currently displayed number is passed to React Native and displayed on the React Native label.

The React Native view contains 2 UI elements

1. A label with the title - "Result on RN side: <number>" - which displays data received from Kotlin Android native UI/Swift iOS Native UI
2. Bottom bar buttons - Home, Feed, Activity, and Profile - when tapped send the selected button info to Native Android/iOS and display it there.

## In scope:

This demo app contains four sections:
1. Initial setup
2. Displaying a native Android/iOS view in a React Native app.
3. Passing props from Android/iOS native to React Native.
4. Passing data from React Native to Android/iOS.

## Android  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iOS

<img src="https://github.com/ShanavasPS/ReactNative_NativeUIComponent/assets/8370662/8ea9d79c-4c3d-4326-bb57-5afe2908e0c4" width="230" />
&nbsp;&nbsp;
<img src="https://github.com/ShanavasPS/ReactNative_NativeUIComponent/assets/8370662/f7386599-bc8d-4e1b-a739-2b6c45934b81" width="230" height="474"/>

## Building the project

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Step 1: Start the Metro Server

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

First, you must start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
