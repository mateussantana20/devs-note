import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  border-width: 2px;
  border-color: #8584f9;
  border-radius: 20px;
`;

export const Texto = styled.Text`
  color: #8584f9;
  font-size: 30px;
  font-weight: bold;
  padding: 10px 20px;
`;

export const Content = styled.ImageBackground`
  margin-top: 30px;
  background: #8584f9;
  flex: 1;
  width: 100%;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`;

export const NotesList = styled(FlatList)`
  /* flex: 1; */
  /* width: 100%; */
  padding: 30px;
`;

export const NoNotes = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IconView = styled.View``;

export const NoNotesText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
`;

export const BackImage = styled.ImageBackground`
  flex: 1;
  /* background-color: transparent; */
  margin-top: 20px;
  max-width: 320px;
  width: 100%;
  padding: 55px;
`;
