import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { colors } from '../../../utils/colors';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    component: {
      backgroundColor: colors.default,
      borderRadius: 25,
      paddingVertical: 11,
    },
  },
  text: {
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
});
