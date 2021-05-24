import React from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent, StyleSheet, View } from 'react-native';

type Props = {
	title?: string;
	color?: string;
	onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

const BaseBtn = ({ title = '추가', color = '#007Aff', onPress }: Props) => {
	return (
		<View style={styles.btnWrapper}>
			<Button title={title} color={color} onPress={onPress} />
		</View>
	);
};

const styles = StyleSheet.create({
	btnWrapper: {
		padding: 10,
	},
});

export default BaseBtn;
