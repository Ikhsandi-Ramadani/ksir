import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ActionButton from './ActionButton';
import {colors} from '../../utils/colors';
import {Welcome} from '../../assets';

const WelcomeAuth = () => {
  return (
    <View style={styles.wrapper.page}>
      <Welcome style={styles.wrapper.illustration} />
      <Text style={styles.text.welcome}>Selamat Datang di K-SIR</Text>
      <ActionButton
        desc="Silahkan masuk, jika anda sudah memiliki akun"
        title="Masuk"
      />
      <ActionButton
        desc="atau silahkan daftar jika anda belum memiliki akun, "
        title="Daftar"
      />
    </View>
  );
};

export default WelcomeAuth;

const styles = StyleSheet.create({
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white',
    },
    illustration: {
      width: 267,
      height: 210,
      marginBottom: 30,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 138,
    },
  },
});
