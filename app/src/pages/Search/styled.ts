import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  padding: 0 30px ${Platform.OS === "android" ? 110 : 40}px;
  flex:1
`;

export const ScrollView = styled.ScrollView`
  margin-top: 20px;
  min-height:100%
`;

export const View = styled.View`
  flex:1
`;

export const Alert = styled.Alert`
   background: #565E70;
`;
