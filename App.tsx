import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TopNav from './components/nav/TopNav';
import GameOver from './screens/GameOver';
import OnGame from './screens/OnGame';
import StartGame from './screens/StartGame';

export default function App() {
	const [userNumber, setUserNumber] = useState<number>();
	const [guessRounds, setGuessRounds] = useState(0);

	const startGameHandler = (selectedNumber: number) => {
		setUserNumber(selectedNumber);
	};

	const gameOverHandler = (numOfRounds: number) => {
		setGuessRounds(numOfRounds);
		setGuessRounds(0);
	};

	return (
		<View style={styles.screen}>
			<TopNav title="Guess A Number" />
			{userNumber ? (
				guessRounds <= 0 ? (
					<OnGame userChoice={userNumber} onGameOver={gameOverHandler} />
				) : (
					<GameOver />
				)
			) : (
				<StartGame onStartGame={startGameHandler} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: 20,
	},
	cardWrapper: {
		marginTop: '10%',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		maxHeight: '30%',
	},
	card: {
		height: '35%',
		minWidth: '30%',
	},
});
