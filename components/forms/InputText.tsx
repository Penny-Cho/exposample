import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../../constants/color';
import { KeyboardType } from '../../interfaces/enums';

type Props = {
	onChangeText: ((text: string) => void) | undefined;
	value: string;
	placeholder: string;
	blurOnSubmit?: boolean;
	autoCorrect?: boolean;
	keyboardType?: KeyboardType;
	maxLength?: number;
};

const InputText = ({
	onChangeText,
	value,
	placeholder,
	blurOnSubmit = true,
	autoCorrect = false,
	keyboardType = KeyboardType.default,
	maxLength = 30,
}: Props) => {
	return (
		<TextInput
			placeholder={placeholder}
			style={styles.textInput}
			onChangeText={onChangeText}
			autoCorrect={autoCorrect}
			blurOnSubmit={blurOnSubmit}
			keyboardType={keyboardType}
			value={value}
			maxLength={maxLength}
		/>
	);
};

const styles = StyleSheet.create({
	textInput: {
		paddingTop: 50,
		fontSize: 16,
		paddingBottom: 10,
		marginBottom: 20,
		borderBottomColor: Colors.line,
		borderBottomWidth: 1,
	},
});

export default InputText;
