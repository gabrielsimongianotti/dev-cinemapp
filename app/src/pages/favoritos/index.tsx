import React, { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, ScrollView, View } from './styled';

import Card from '../../components/Card';
import api from '../../services/api';
import Options from '../../components/Options';

const Search: React.FC = () => {
  interface Imovie {
    Title: string;
    Year: string;
    Poster: string;
    Type: string;
    imdbID: string;
  }

  const [datasApi, setDataApi] = useState<Imovie[]>([]);

  useEffect(() => {
    // AsyncStorage.clear()

    getData();
  }, [])
  const getData = useCallback(async () => {
    let ids = await AsyncStorage.getItem('ids');
    console.log(ids)
    if (ids) {
      const json = JSON.parse(ids);
      json.data.map((id: string) => {
        getDataApi(id);
      })
    }
  }, [datasApi]);

  const getDataApi = useCallback(async (id: string) => {
    const { data } = await api.get(`?apikey=925eba28&i=${id}`);
    console.log(data.Title)

    const valueJson = datasApi
    valueJson.push(
      {
        Title: data.Title,
        Year: data.Year,
        Poster: data.Poster,
        Type: data.Type,
        imdbID: data.imdbID,
      }
    );

    await setDataApi(valueJson);
  }, [datasApi])

  return (
    <View>
      <Container >
        {
          console.log(datasApi.length)
        }
        <ScrollView >
          {
            datasApi.map(({ Poster, Title, Type, Year, imdbID }) => (
              <Card title={Title} year={Year} image_url={Poster} key={imdbID} id={imdbID} type={Type} like={true} />
            ))
          }
        </ScrollView>

      </Container>
      <Options />
    </View>
  )
};

export default Search;
