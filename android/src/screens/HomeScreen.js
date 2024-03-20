import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import Banner from '../components/Homepage/banner';
import TopProducts from '../components/Homepage/TopProducts';

const Home = () => {
  return (
    <View>
      <View style={styles.container}>
        <Banner />
      </View>
      <TopProducts />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
