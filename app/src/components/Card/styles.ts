import styled from 'styled-components/native';

export const Container = styled.View`
  background: rgba(0, 0, 0, 0.25);

  margin-top:10px;

  border-radius: 10px;
  /* width:50%; */
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.Text`
  /* margin: 10px; */
  font-family: 'RobotoSlab-medium';
margin: 10px;
  font-weight: bold;
  color: #aeb4b7;
  font-size: 18px;
`;

export const ButtonQuest = styled.TouchableOpacity`
  background: #363D4D;
  border-radius: 10px;
  margin: 20px;
  height:40px;
  width: 40px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const ImagePoster = styled.Image`
  width:200px;
  height:250px;
  border-radius:10px;
`;

export const View = styled.View`
 flex-direction: row;
 align-items:center;
`;
