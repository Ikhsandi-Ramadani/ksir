import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {Button} from '../../components';

const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  wrapper: {
    component: {marginBottom: 43, maxWidth: 304},
  },
  text: {
    desc: {
      fontSize: 11,
      color: colors.fontPemberitahuan,
      textAlign: 'center',
      paddingHorizontal: '15%',
      marginBottom: 12,
    },
  },
});
