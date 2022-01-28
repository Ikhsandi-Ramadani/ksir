import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ActionButton = ({desc, title}) => {
  return (
    <View style={{marginBottom: 43, maxWidth: 304}}>
      <Text
        style={{
          fontSize: 11,
          color: '#989898',
          textAlign: 'center',
          paddingHorizontal: '15%',
          marginBottom: 12,
        }}>
        {desc}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#57A7F1',
          borderRadius: 25,
          paddingVertical: 11,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const WelcomeAuth = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: 267,
          height: 210,
          backgroundColor: '#57A7F1',
          marginBottom: 30,
        }}></View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#57A7F1',
          marginBottom: 138,
        }}>
        Selamat Datang di K-SIR
      </Text>
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

const styles = StyleSheet.create({});
