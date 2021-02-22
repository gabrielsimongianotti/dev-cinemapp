import React, { useState, useCallback } from 'react';
import { Container, ScrollView, View, Alert } from './styled';

import SearchT from '../../components/Quest';
import Card from '../../components/Card';
import api from '../../services/api';
import Options from '../../components/Options';

const Search: React.FC = () => {
  const [datasApi, setDataApi] = useState([]);

  const getApi = useCallback((text: string) => {
    api.get(`?apikey=925eba28&s=${text}`).then((response) => {

console.log(typeof(response.data.Response),response.data.Response )
      // os filhos da puta me retorna um true que é um string que porra
      if (response.data.Response === 'True') {
        console.log(response.data)
        setDataApi(response.data.Search);
      }
      else {
        console.log(response)
        Alert.alert(
        "Alert Title",
        'response.data.Error',
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
      }
    })
  }, [setDataApi])

  return (
    <View>
      <Container >
        <SearchT sendText={getApi} />
        {
          console.log("datasApi, ", datasApi)
        }
        <ScrollView >
          {
            datasApi.map(({ Poster, Title, Type, Year, imdbID }) => (
              <Card title={Title} year={Year} image_url={Poster} key={imdbID} id={imdbID} type={Type} />
            ))
          }
          {/* <Card like={true} title="Title" year="Year" image_url="Poster" key="imdbID" /> */}
        </ScrollView>

      </Container>
      <Options />
    </View>
  )
};

export default Search;
