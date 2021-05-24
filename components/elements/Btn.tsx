import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../constants/color';

type Props = {
	title: string;
	color?: string;
	onPress: ((event: GestureResponderEvent) => void) | undefined;
};

const Btn = ({ title, color = Colors.primary, onPress }: Props) => {
	return (
		<TouchableOpacity style={[styles.touch, { backgroundColor: color }]} onPress={onPress}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	touch: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		minWidth: '48%',
		marginHorizontal: '1%',
		borderRadius: 6,
	},
	title: {
		fontSize: 16,
		color: 'white',
	},
});

export default Btn;
