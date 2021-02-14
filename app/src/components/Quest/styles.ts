import styled from 'styled-components/native';

export const Container = styled.View`
  background: rgba(0, 0, 0, 0.25);
  margin-top:2px;
  border-radius: 10px;
  height:40px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  font-family: 'RobotoSlab-medium';
  width: 80%;
  font-weight: bold;
  color: #aeb4b7;
  font-size: 18px;
`;

export const ButtonQuest = styled.TouchableOpacity`
  background: #565E70;
  width: 40px;
  border-radius: 10px;
  align-items: center;
  height:40px;
  justify-content: space-around;
  flex-direction: row;
`;


