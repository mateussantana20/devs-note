import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Content,
  Texto,
  HeaderContainer,
  ButtonIcon,
  NotesList,
  NoNotes,
  IconView,
  NoNotesText,
  BackImage,
} from './styles';

import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import NoteItem from '../../components/NoteItem';

import bg from '../../assets/undraw_personal_email_t7nw.png';

export default () => {
  const {navigate, setOptions} = useNavigation();
  const list = useSelector(state => state.notes.list);
  // const list = [];

  // useLayoutEffect(() => {
  //   setOptions({
  //     title: 'Suas Notas',
  //   });
  // }, [setOptions]);

  const handleNotePress = index => {
    // alert(`Clicou em ${index}`);
    navigate('EditNote', {
      key: index,
    });
  };

  return (
    <>
      <HeaderContainer>
        <Texto>Suas notas</Texto>
        <ButtonIcon
          onPress={() => {
            navigate('EditNote');
          }}>
          <Icon name="plus" size={32} color="#8584f9" />
        </ButtonIcon>
      </HeaderContainer>
      <Container>
        <Content>
          {/* <BackImage source={bg} /> */}
          {list.length > 0 && (
            <NotesList
              data={list}
              renderItem={({item, index}) => (
                <NoteItem data={item} index={index} onPress={handleNotePress} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
          {list.length === 0 && (
            <NoNotes>
              <IconView>
                <Icon name="slash" color="#fff" size={50} />
              </IconView>
              <NoNotesText>Nenhuma anotação</NoNotesText>
            </NoNotes>
          )}
        </Content>
      </Container>
    </>
  );
};
