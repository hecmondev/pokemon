import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Text } from 'react-native';
import PokemonItem from './PokemonItem';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const nextPage = useRef('');

  const gettingPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const json = await response.json();

      console.log('response ->', json);

      if (json?.next) {
        nextPage.current = json.next;
      }

      if (json?.results?.length > 0) {
        setPokemons(json.results);
      }

      return json;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    gettingPokemons();
  }, []);

  return (
    <FlatList
      data={pokemons}
      keyExtractor={({ name }) => name}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: { name, url } }) => <PokemonItem name={name} url={url} />}
    />
  );
};

export default PokemonList;
