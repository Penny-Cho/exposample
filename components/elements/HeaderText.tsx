import React from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = {
	title: string;
};

const HeaderText = (props: Props) => {
	return <Text style={styles.headerText}>{props.title}</Text>;
};

const styles = StyleSheet.create({
	headerText: {
		fontSize: 30,
		fontWeight: 'bold',
	},
});

export default HeaderText;
