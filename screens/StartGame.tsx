import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Btn from '../components/elements/Btn';
import DismissKeyboard from '../components/elements/DismissKeyboard';
import InputText from '../components/forms/InputText';
import color from '../constants/color';
import { KeyboardType } from '../interfaces/enums';

type Props = {
	onStartGame: (a: number) => void;
};

const StartGame = ({ onStartGame }: Props) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState(0);

	const resetHandler = () => {
		setEnteredValue('');
		setConfirmed(false);
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99', [
				{ text: 'Okay', style: 'destructive', onPress: resetHandler },
			]);
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setEnteredValue('');
	};

	return (
		<DismissKeyboard>
			<View style={styles.screen}>
				<View>
					<Text>Select a Number</Text>

					<InputText
						value={enteredValue}
						placeholder="number"
						onChangeText={text => {
							setEnteredValue(text.replace(/[^0-9]/g, ''));
						}}
						blurOnSubmit
						keyboardType={KeyboardType.number}
						maxLength={2}
					/>

					<View style={styles.btnWrapper}>
						<Btn title="Reset" color="gray" onPress={resetHandler} />
						<Btn title="Confirm" onPress={confirmInputHandler} />
					</View>
					<View style={styles.answerWrapper}>
						{confirmed && (
							<>
								<Text style={styles.answer}> {selectedNumber} </Text>
								<Btn
									title="Start Game"
									color={color.highlight}
									onPress={() => onStartGame(selectedNumber)}
								/>
							</>
						)}
					</View>
				</View>
			</View>
		</DismissKeyboard>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: 30,
		paddingHorizontal: 20,
		alignItems: 'center',
		width: '100%',
	},
	text: {
		color: '#000',
		fontSize: 20,
		marginBottom: 20,
	},
	btnWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	answerWrapper: {
		alignItems: 'center',
		paddingTop: 30,
	},
	answer: {
		fontSize: 50,
		color: color.highlight,
	},
});

export default StartGame;
