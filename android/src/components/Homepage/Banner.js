import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../../../assets/images/banner2.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.bannerText}>
          Welcome to <Text style={styles.eshopText}>E-Shop</Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 240,
  },
  bannerText: {
    position: 'absolute',
    top: 20,
    left: 10,
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
  },
  eshopText: {
    color: 'red',
  },
});
