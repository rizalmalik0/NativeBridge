/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';

import MainScene from './components/MainScene';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header>Native Bridge App</Header>
        <MainScene />
      </View>
    );
  }
}
