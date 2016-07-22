/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var Swiper = require('react-native-swiper')
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native';


class overzero extends Component {

  render() {
    return (
		<Swiper index = {2}>
			  <View style={styles.container}>
				<Text style={styles.title}>
				Instructions
				</Text>
			  </View>
			  <View style={styles.container2}>
				<Text style={styles.title}>
				overZero
				</Text>
			  </View>
			  <View style={styles.container}>
				<Text style={styles.title}>
				The Game
				</Text>
			  </View>
		</Swiper>
    );
  }
}

var colorScheme = [
  [ //green
    "#69b62a",
    "#a8f766",
    "#78e220",
    "#56842f",
    "#263d13"
  ],
  [ //blue

  ],
  [

  ],
  [

  ]
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorScheme[6],
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
	backgroundColor: '#BADAD9'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: colorScheme[4],
  },
});

AppRegistry.registerComponent('overzero', () => overzero);
