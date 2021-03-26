import { StatusBar } from 'expo-status-bar';
import { Root } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Main from './src';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Root>
        <Main />
      </Root>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
