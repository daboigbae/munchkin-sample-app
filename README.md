# Munchkin react native component library storybook 🧟 🧟 🧟

This is the repo of the mobile storybook for the munchkin react native component library. 

The application was written in React Native and was bootstrapped with the munchkin template here
https://www.npmjs.com/package/@digital-art-dealers/react-native-component-lib

## Folder Structure 📁 📁 📁 📁
App.js - main application

/src
- assets - for all images and test input data
= components - for screen components
= navigation - for all navigation objects
= redux - using redux slices for state
= screens - a place for all our screens
= styles - shared styling
= utils - for all helper functions

## Running the project 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 🏃‍♀️
### iOS
Take the following steps to run the application locally for iOS

run `yarn install`
navigate to the iOS folder using a terminal `cd ios`
run `pod install`
run `yarn ios` from the roon

### Android
Take the following steps to run the application locally for iOS

run `yarn install`
run `yarn android`
If you run into any issues, please make sure your development environment is set-up with a fresh react native app.

If your android app runs, but it can't connect to the react native server
Open a new terminal and navigate to the project
Run `adb reverse tcp:8081 tcp:8081`
Run `yarn start`
Run `yarn android`