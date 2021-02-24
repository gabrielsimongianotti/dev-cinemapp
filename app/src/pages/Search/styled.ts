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

export const Alert = styled.Text`
  margin-top: 20px;
  height: 40px;
  width: 205px;
  background: #363D4D;
  color: #aeb4b7;
  font-family: 'RobotoSlab-medium';
  font-weight: bold;
  color: #aeb4b7;
  border-radius: 10px;
  font-size: 28px;
  justify-content: space-around;
  flex-direction: row;
`;
