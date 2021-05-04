import React from "react";
import { StyleSheet, TextInput } from "react-native";

type Props = {
    onChangeText: ((text: string) => void) | undefined;
    value: string;
    placeholder: string;
};

const InputText = ({ onChangeText, value, placeholder }: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={styles.textInput}
            onChangeText={onChangeText}
            value={value}
        />
    );
};

const styles = StyleSheet.create({
    textInput: {
        paddingTop: 50,
        fontSize: 16,
        paddingBottom: 10,
        marginBottom: 20,
        borderBottomColor: "#F4F4F4",
        borderBottomWidth: 1,
    },
});

export default InputText;
