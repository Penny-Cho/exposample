import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
	title: string;
};

const TopNav = ({ title }: Props) => {
	return (
		<View style={styles.root}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		width: '100%',
		height: 80,
		paddingTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 14,
		fontWeight: '600',
		color: '#777A7E',
	},
});

export default TopNav;
