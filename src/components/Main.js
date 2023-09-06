import Constants from 'expo-constants';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import PokemonList from './PokemonList';

const Main = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/pokemon.png')} style={styles.header} />
      <PokemonList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    display: 'flex',
    gap: 5,
    padding: 5,
  },
  header: {
    resizeMode: 'center',
    width: 415,
    height: 160,
  },
});

export default Main;
