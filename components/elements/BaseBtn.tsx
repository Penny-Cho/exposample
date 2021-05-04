import React from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

type Props = {
	title: string;
	onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

const BaseBtn = ({ title, onPress }: Props) => {
	return <Button title="추가" onPress={onPress} />;
};

export default BaseBtn;
