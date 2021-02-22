import React, { useState } from 'react';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { Container, ButtonQuest, Text, ImagePoster, View } from './styles';
import heartFill from '../../assets/heart_fill.png';
import heartOutline from '../../assets/heart_outline.png';

interface ICard {
  title: string;
  year: string;
  image_url: string;
  type: string;
  id: string;
  like?: false | true;
}

const Card: React.FC<ICard> = ({ title, year, image_url, type, id, like = false }) => {
  const [favorites, setFavorites] = useState(like)

  return (
    <Container>
      <Text>{title}</Text>
      <ImagePoster source={{ uri: image_url }} />
      <View>
        <Text>Year: {year}</Text>
        <Text>Type: {type}</Text>
        <ButtonQuest onPress={async () => {
          setFavorites(!favorites);
          // AsyncStorage.clear()
          const ids = await AsyncStorage.getItem('ids');
          if (!favorites) {
            if (ids) {
              const json = JSON.parse(ids);
              json.data.push(id);
              await AsyncStorage.setItem('ids', JSON.stringify(json))
            }
            else {
              await AsyncStorage.setItem('ids', JSON.stringify({ data: [id] }))
            }
          }
          else {
            if (ids) {
              const json = JSON.parse(ids);
              const newJson = await json.data.filter((data: string) => data !== id);
              await AsyncStorage.setItem('ids', JSON.stringify({ data: newJson }))
            }
          }

        }}>
          {favorites ?
            <Image source={heartFill} />
            :
            <Image source={heartOutline} />
          }
        </ButtonQuest>
      </View>
    </Container>
  );
};

export default Card;
