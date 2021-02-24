import React, { useState, useCallback } from 'react';
import { Container, ScrollView, View, Alert } from './styled';

import SearchT from '../../components/Quest';
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
  const [datasApi, setDataApi] = useState<Imovie[]>([]);
  const [error, setError] = useState(false);

  const getApi = useCallback((text: string) => {
    api.get(`?apikey=925eba28&s=${text}`).then((response) => {

      // os filhos da puta me retorna um true que é um string que porra
      if (response.data.Response === 'True') {
        setDataApi(response.data.Search);
        setError(false)
      }
      else {
        setDataApi([]);
        setError(true);
      }
    })
  }, [setDataApi])

  return (
    <View>
      <Container >
        <SearchT sendText={getApi} />
        {error?<Alert >Não encontrado</Alert>:null}
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
