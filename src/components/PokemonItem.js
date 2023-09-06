import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import StyledText from '../styled-components/StyledText';
import capitalize from '../utils/capitalize';

const PokemonItem = ({ name, url }) => {
  const [avatar, setAvatar] = useState(require('../../assets/icon.png'));
  const metadata = useRef();

  const gettingPokemon = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();

      metadata.current = json;
      setAvatar({ url: json.sprites.other['official-artwork'].front_default });
      return;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    gettingPokemon();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.image} />
      <StyledText title>{capitalize(name)}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default PokemonItem;
