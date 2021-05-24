import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ExtraStyle {
	height: string;
	minWidth: string;
}

type Props = {
	children: any;
	extraStyle: ExtraStyle;
};

const Card = ({ children, extraStyle }: Props) => {
	return <View style={{ ...styles.card, ...extraStyle }}>{children}</View>;
};

const styles = StyleSheet.create({
	card: {
		padding: 20,
		borderRadius: 6,
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		marginHorizontal: '2%',
		elevation: 1,
		alignItems: 'center',
	},
});

export default Card;
