import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

type Props = {
	children: any;
};

const DismissKeyboard = ({ children }: Props) => {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			{children}
		</TouchableWithoutFeedback>
	);
};

export default DismissKeyboard;
