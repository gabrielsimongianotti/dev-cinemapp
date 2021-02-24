import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, CardList, View } from './styled';

import Card from '../../components/Card';
import api from '../../services/api';
import Options from '../../components/Options';
interface Imovie {
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
  imdbID: string;
}

const Search: React.FC = () => {

  const [dataApi, setDataApi] = useState<Imovie[]>([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = useCallback(async () => {
    const ids = await AsyncStorage.getItem('ids');

    if (ids) {
      const json = JSON.parse(ids);

      json.data.map(async (id: string) => {
        await getDataApi(id)
      })
    }
  }, []);

  const getDataApi = useCallback(async (id: string) => {
    const { data } = await api.get(`?apikey=925eba28&i=${id}`);

    const valueJson = await dataApi;

    if (dataApi.filter(item => item.imdbID === id).length === 0) {
      valueJson.push({
        Title: data.Title,
        Year: data.Year,
        Poster: data.Poster,
        Type: data.Type,
        imdbID: data.imdbID,
      })
    }

    await setDataApi(valueJson);

  }, [dataApi]);

  const fuctionCard = ({ item: { Title = '', Year = '', Poster = '', imdbID = '', Type = '' } }) => (
    <Card title={Title} year={Year} image_url={Poster} key={imdbID} id={imdbID} type={Type} />
  )

  return (
    <View>
      <Container >

        <CardList
          data={dataApi}
          keyExtractor={(item: { imdbID: string; }) => item.imdbID}
          renderItem={fuctionCard}
        />

      </Container>
      <Options />
    </View>
  )
};

export default Search;
