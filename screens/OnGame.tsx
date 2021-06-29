import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Btn from '../components/elements/Btn';
import color from '../constants/color';

type Props = {
	userChoice: number;
	onGameOver: (param: number) => void;
};

const generateRandomBetween = (min: number, max: number, exclude: number): number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

const OnGame = ({ userChoice, onGameOver }: Props) => {
	const [currGuess, setCurrGuess] = useState(generateRandomBetween(1, 100, userChoice));
	const [rounds, setRounds] = useState(0);
	const currLow = useRef(1);
	const currHigh = useRef(100);

	useEffect(() => {
		if (currGuess === userChoice) {
			onGameOver(rounds);
		}
	}, [currGuess, userChoice, onGameOver]);

	const nextGuessHandler = (direction: string) => {
		if (
			(direction === 'down' && currGuess < userChoice) ||
			(direction === 'up' && currGuess > userChoice)
		) {
			Alert.alert('거짓말!', '거짓말이잖아용...', [{ text: 'Sorry!', style: 'cancel' }]);
			return;
		}
		if (direction === 'down') {
			currHigh.current = currGuess;
		} else {
			currLow.current = currGuess;
		}
		const nextNumber = generateRandomBetween(currLow.current, currHigh.current, currGuess);
		setCurrGuess(nextNumber);
		setRounds(currRounds => currRounds + 1);
	};

	return (
		<View style={styles.screen}>
			<Text>음 이거야?</Text>
			<Text style={styles.estimates}>{currGuess}</Text>
			<View style={styles.btnWrapper}>
				<Btn title="UP" color={color.up} onPress={() => nextGuessHandler('up')} />
				<Btn title="DOWN" color={color.down} onPress={() => nextGuessHandler('down')} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	btnWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
	},
	estimates: {
		fontSize: 50,
		color: color.highlight,
	},
});

export default OnGame;
