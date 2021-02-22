import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Touchable, TextMensager } from './styles';

const Options: React.FC = () => {
const { navigate} = useNavigation();
  return (
    <View>
      <Touchable onPress={() => {navigate('search') }}>
        <TextMensager >Busca</TextMensager>
      </Touchable>
      <Touchable onPress={() => {navigate('favoritos') }}>
        <TextMensager  >Favorito</TextMensager>
      </Touchable>
    </View>
  );
};

export default Options;
