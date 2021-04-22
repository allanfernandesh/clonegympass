import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import React from 'react';
import App from './src';

export default function Main() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <App />
    </>
  );
}
