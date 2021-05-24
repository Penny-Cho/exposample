import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';

type Props = {
	children: any;
	visible: boolean;
};

const ModalView = ({ children, visible }: Props) => {
	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.screen}>{children}</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
	},
});

export default ModalView;
