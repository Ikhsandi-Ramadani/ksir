import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {Button} from '../../components';

const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={styles.wrapper.component}>
      <Button title={title} onPress={onPress} />
      <Text style={styles.text.desc}>{desc}</Text>
    </View>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  wrapper: {
    component: {
      // marginBottom: 43,
      padding: 16,
      // maxWidth: 328
    },
  },
  text: {
    desc: {
      fontSize: 11,
      color: colors.fontPemberitahuan,
      textAlign: 'center',
      marginTop: 10,
    },
  },
});
