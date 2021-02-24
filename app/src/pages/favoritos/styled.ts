import styled from 'styled-components/native'
import { Platform } from 'react-native';
import { FlatList } from 'react-native';
import { Movie } from './index';

export const CardList = styled(FlatList as new () => FlatList<Movie>)`
  min-height: 115%;
`;

export const View = styled.View`
  flex:1
`;

export const Container = styled.View`
  margin-top:10px;
  padding: 0 30px ${Platform.OS === "android" ? 110 : 40}px;
  flex:1
`;
