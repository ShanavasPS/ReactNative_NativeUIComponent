# React Native Native UI Component

A simple React Native app that displays the Kotlin Android native UI view/Swift iOS View and the React Native text label component at the bottom of the screen.

 - Kotlin Android native UI/Swift iOS Native UI view on top of that in Sky blue.
 - React Native text label component at the bottom of the screen.

The native view, the one with a sky-blue background, contains 3 UI elements:

1. Label with a generated random number,
2. "Generate" button - every time the button is tapped, a new random number is displayed,
3. "Send to RN” button - every time the button is tapped, the currently displayed number is passed to React Native and displayed on the React Native label.

## In scope:

This demo app contains 4 sections:
1. Initial setup
2. Displaying a native Android/iOS view in a React Native app.
3. Passing props from Android/iOS native to React Native.

## Android

<img src="https://github.com/ShanavasPS/ReactNative_NativeUIComponent/assets/8370662/2add6b41-5fdf-41fe-a77f-cebe4ca0d7d1" width="230" />

## iOS

<img src="https://github.com/ShanavasPS/ReactNative_NativeUIComponent/assets/8370662/2510d723-50c4-42b2-a1e8-5ef4864223d3" width="230" />

## Getting Started

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Step 1: Start the Metro Server

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

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
