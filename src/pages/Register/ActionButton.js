import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {Button} from '../../components';
import {Attention} from '../../assets/images';

const ActionButton = ({title, onPress}) => {
  return (
    <View style={styles.wrapper.component}>
      <Button title={title} onPress={onPress} />
      <Attention style={styles.text.desc} />
    </View>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  wrapper: {
    component: {
      // maxWidth: 328
    },
  },
  text: {
    desc: {
      marginTop: 12,
      // maxWidth: 289,
    },
  },
});
