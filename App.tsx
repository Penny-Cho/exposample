import React, { useState } from 'react';
import { CourseGoal } from './interfaces';
import { FlatList, StyleSheet, View } from 'react-native';
import HeaderText from './components/elements/HeaderText';
import InputText from './components/forms/InputText';
import BaseBtn from './components/elements/BaseBtn';
import GoalItem from './components/elements/GoalItem';

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('');
	const [courseGoals, setCourseGoals] = useState<CourseGoal[] | []>([]);

	const goalInputHandler = (enteredText: string) => setEnteredGoal(enteredText);

	const addGoalHandler = () =>
		setCourseGoals(curr => [...curr, { id: Math.random().toString(), value: enteredGoal }]);

	return (
		<View style={styles.screen}>
			<View style={styles.inputBox}>
				<HeaderText title="Tasks To Do" />
				<InputText
					onChangeText={goalInputHandler}
					value={enteredGoal}
					placeholder="enter a new job"
				/>
				<BaseBtn onPress={addGoalHandler} title="추가하기" />
			</View>
			<View style={styles.listBox}>
				<FlatList
					keyExtractor={(item, index) => item.id}
					data={courseGoals}
					renderItem={item => <GoalItem item={item.item} />}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: 50,
	},
	inputBox: {
		padding: 20,
	},
	listBox: {
		paddingHorizontal: 20,
	},
});
