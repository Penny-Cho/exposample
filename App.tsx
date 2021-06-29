import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TopNav from './components/nav/TopNav';
import GameOver from './screens/GameOver';
import OnGame from './screens/OnGame';
import StartGame from './screens/StartGame';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
	const [appLoaded, setAppLoaded] = useState(false);
	const fetchFonts = () => {
		return Font.loadAsync({
			'NotoSansKR-Bold': require('./assets/fonts/NotoSansKR-Bold.otf'),
			'NotoSansKR-regular': require('./assets/fonts/NotoSansKR-Regular.otf'),
		});
	};
	const [userNumber, setUserNumber] = useState<number | null>(0);
	const [guessRounds, setGuessRounds] = useState(0);

	const startGameHandler = (selectedNumber: number) => {
		setUserNumber(selectedNumber);
	};

	const gameOverHandler = (numOfRounds: number) => {
		setGuessRounds(numOfRounds);
	};

	const configureNewGameHandler = () => {
		setGuessRounds(0);
		setUserNumber(null);
	};

	let content = <StartGame onStartGame={startGameHandler} />;

	if (userNumber && guessRounds <= 0) {
		content = <OnGame userChoice={userNumber} onGameOver={gameOverHandler} />;
	}
	if (userNumber && guessRounds > 0) {
		content = (
			<GameOver
				roundsNumber={guessRounds}
				userNumber={userNumber}
				onRestart={configureNewGameHandler}
			/>
		);
	}

	if (!appLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setAppLoaded(true)}
				onError={err => console.log(err)}
			/>
		);
	}

	return (
		<View style={styles.screen}>
			<TopNav title="Guess A Number" />

			{content}
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
