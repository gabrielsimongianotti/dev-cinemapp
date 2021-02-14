import React from 'react';
import { Image } from 'react-native';

import { Container, ButtonQuest, Input } from './styles';
import subtract from '../../assets/subtract.png';

const Quest: React.FC = () => {

  return (
    <Container>
      <Input />

      <ButtonQuest onPress={() => {
      console.log('fsd')
      }} >
        <Image source={subtract} />
      </ButtonQuest>
    </Container>
  );
};

export default Quest;
