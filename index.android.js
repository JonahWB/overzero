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
		<Swiper index = {1}>
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
			  <View style= {styles.container}>
					<View style = {styles.tile1} />
					<View style = {styles.tile2} />
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
  tile1: {
	width: 50,
	height: 50,
	top: 70,
	left: 70,
	position: 'absolute',
	backgroundColor: 'red'
  },
  tile2: {
	width: 50,
	height: 50,
	top: 170,
	left: 270,
	position: 'absolute',
	backgroundColor: 'blue'
  }
});

AppRegistry.registerComponent('overzero', () => overzero);
