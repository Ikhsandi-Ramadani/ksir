import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../../components/atoms/Input';
import {colors} from '../../utils';
import ActionButton from './ActionButton';

const Register = () => {
  return (
    <View style={styles.wrapper.page}>
      <View style={{height: 60}} />
      <Text style={styles.text.desc}>Nama Lengkap</Text>
      <Input />

      <Text style={styles.text.desc}>Kata Sandi</Text>
      <Input />

      <Text style={styles.text.passDesc}>
        Min. 7 karakter berupa kombinasi angka, huruf besar dan huruf kecil
      </Text>

      <Text style={styles.text.desc}>Email</Text>
      <Input />

      <Text style={styles.text.desc}>Nomor Telepon</Text>
      <Input />

      <ActionButton title="buat akun" onPress={() => handleGoTo('Login')} />

      <Text style={styles.text.bottomDesc}>
        Dengan log in kamu menyetujui Syarat & Ketentuan dan Kebijakan Privasi
        K-Sir.com
      </Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  wrapper: {
    page: {padding: 16, backgroundColor: 'white', flex: 1},
  },
  text: {
    desc: {
      fontSize: 14,
      color: colors.fontPemberitahuan,
      marginBottom: 10,
    },
    passDesc: {
      fontSize: 12,
      color: colors.fontPemberitahuan,
      marginTop: -20,
      marginBottom: 20,
      maxWidth: 320,
    },
    bottomDesc: {
      marginTop: 120,
      fontSize: 11,
      textAlign: 'center',
    },
  },
});
