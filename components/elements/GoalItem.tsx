import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CourseGoal } from '../../interfaces';

type Props = {
	item: CourseGoal;
};

const GoalItem = ({ item }: Props) => {
	return (
		<View style={styles.listItemBox}>
			<Text>{item.value}</Text>
		</View>
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
