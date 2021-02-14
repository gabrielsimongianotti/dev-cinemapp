import React, { useState } from 'react';
import { Image } from 'react-native';

import { Container, ButtonQuest, Input } from './styles';
import subtract from '../../assets/subtract.png';

interface IQuest {
  sendText: (text: string) => void;
}

const Quest: React.FC<IQuest> = ({ sendText }) => {

  const [inputText, onChangeText] = useState('');


  return (
    <Container>
      <Input onChangeText={(text: string) => onChangeText(text)} />

      <ButtonQuest onPress={() => {
        sendText(inputText);
      }} >
        <Image source={subtract} />
      </ButtonQuest>
    </Container>
  );
};

export default Quest;
