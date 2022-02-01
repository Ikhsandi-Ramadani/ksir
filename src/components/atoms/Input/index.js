import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
const Input = () => {
  return <TextInput style={styles.input} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#989898',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 14,
    color: colors.fontColor1,
    // maxWidth: 340,
    maxHeight: 40,
    marginBottom: 25,
  },
});
