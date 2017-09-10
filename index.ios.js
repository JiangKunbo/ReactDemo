import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainActivity from './app/root';
export default class EngTranslator extends Component {
  render() {
    return (
     <MainActivity/>
    );
  }
}
AppRegistry.registerComponent('EngTranslator', () => EngTranslator);
