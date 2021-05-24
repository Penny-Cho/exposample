import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CourseGoal } from '../../interfaces';

type Props = {
	item: CourseGoal;
	onDelete: (event: GestureResponderEvent) => void;
};

const GoalItem = ({ onDelete, item }: Props) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onLongPress={onDelete}>
			<View style={styles.listItemBox}>
				<Text>{item.value}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listItemBox: {
		padding: 20,
		marginVertical: 5,
		backgroundColor: '#EBEEF4',
		borderRadius: 6,
	},
});

export default GoalItem;
