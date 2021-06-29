import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import color from '../constants/color';
import Btn from '../components/elements/Btn';

type Props = {
	roundsNumber: number;
	userNumber: number;
	onRestart: (event: GestureResponderEvent) => void;
};

const GameOver = ({ roundsNumber, userNumber, onRestart }: Props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Game Over</Text>
			<Text>Number of Rounds</Text>
			<Text style={styles.roundsNumber}>{roundsNumber}</Text>
			<Text style={styles.answer}>Number was {userNumber} </Text>
			<Btn title="New Game" color={color.highlight} onPress={onRestart} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 25,
		paddingBottom: 30,
	},
	roundsNumber: {
		fontSize: 50,
		color: color.highlight,
	},
	answer: {
		paddingTop: 10,
		paddingBottom: 20,
		fontSize: 18,
		color: color.grey,
	},
});

export default GameOver;
