import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ActionButton from './ActionButton';
import {colors} from '../../utils/colors';
import {Apple, Fb, Google, Welcome} from '../../assets';
import {Input} from '../../components';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper.page}>
      <View style={styles.wrapper.item}>
        <Welcome style={styles.wrapper.illustration} />
        <Text style={styles.text.welcome}>Selamat Datang di K-SIR</Text>
      </View>
      <View style={styles.text.form}>
        <Text style={styles.text.desc}>Nomor Telepon atau Email</Text>
        <Input />
      </View>
      <ActionButton
        desc={'Atau masuk dengan'}
        title="Masuk"
        onPress={() => handleGoTo('Register')}
      />
      <View style={styles.icon}>
        <Apple style={{marginHorizontal: 18}} />
        <Google style={{marginHorizontal: 18}} />
        <Fb style={{marginHorizontal: 18}} />
      </View>
      <Text style={styles.text.afterIcon}>
        Belum punya akun? Buat Akun Yuk!
      </Text>
      <Text style={styles.text.bottomDesc}>
        Dengan log in kamu menyetujui Syarat & Ketentuan dan Kebijakan Privasi
        K-Sir.com
      </Text>
    </View>
  );
};

export default WelcomeAuth;

const styles = StyleSheet.create({
  wrapper: {
    page: {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white',
    },
    item: {
      alignItems: 'center',
    },
    illustration: {
      width: 267,
      height: 210,
      marginBottom: 30,
      marginTop: 90,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
    },
    form: {
      textAlign: 'left',
      padding: 16,
      marginBottom: -30,
      marginTop: -40,
    },
    desc: {
      marginTop: 67,
      textAlign: 'left',
      fontSize: 14,
      color: colors.fontPemberitahuan,
      marginBottom: 10,
    },
    afterIcon: {
      marginTop: 20,
      textAlign: 'center',
    },
    bottomDesc: {
      marginTop: 80,
      fontSize: 11,
      textAlign: 'center',
    },
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
