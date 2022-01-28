import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import { Logo, Copyright } from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.background}>
      {/* <Image source={Logo} style={styles.logo} /> */}
      {/* <SvgUri width="200" height="200" svgXmlData={Logo} /> */}
      <Logo width={400} height={400} marginTop={180} />
      {/* <Image source={Copyright} style={styles.copyright} /> */}
      <Copyright marginTop={150} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // logo: {
  //   width: 400,
  //   height: 400,
  //   marginTop: 180,
  // },
  // copyright: {
  //   marginTop: 150,
  // },
});
