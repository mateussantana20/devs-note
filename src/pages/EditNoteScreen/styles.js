import styled from 'styled-components/native';

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
  padding: 3px;
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
  padding: 20px;
`;

export const TitleInput = styled.TextInput`
  border-width: 1px;
  border-color: #fff;
  border-radius: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
`;
export const BodyInput = styled.TextInput`
  margin-top: 15px;
  background: #fff;
  border-radius: 20px;
  color: #8584f9;
  font-size: 16px;
  padding: 15px;
  flex: 1;
`;

export const SaveButton = styled.TouchableOpacity`
  border-width: 2px;
  border-color: #8584f9;
  border-radius: 20px;
  padding: 3px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  border-width: 2px;
  border-color: #ff0000;
  border-radius: 20px;
  position: absolute;
  bottom: 40px;
  right: 40px;
  padding: 8px;
`;
