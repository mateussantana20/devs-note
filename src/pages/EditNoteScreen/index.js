import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Container,
  HeaderContainer,
  ButtonIcon,
  Texto,
  Content,
  TitleInput,
  BodyInput,
  SaveButton,
  ButtonDelete,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';

export default () => {
  const {goBack} = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector(state => state.notes.list);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('new');

  useEffect(() => {
    if (route.params?.key !== undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
  }, [list, route.params]);

  const handleSaveButton = () => {
    if (title !== '' && body !== '') {
      if (status === 'edit') {
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            key: route.params.key,
            title: title,
            body: body,
          },
        });
      } else {
        dispatch({
          type: 'ADD_NOTE',
          payload: {
            title: title,
            body: body,
          },
        });
      }
      goBack();
    } else {
      alert('Preencha sua anotação');
    }
  };

  const handleDeleteNoteButton = () => {
    dispatch({
      type: 'DEL_NOTE',
      payload: {
        key: route.params.key,
      },
    });
    goBack();
  };

  return (
    <>
      <HeaderContainer>
        <ButtonIcon
          onPress={() => {
            goBack();
          }}>
          <Icon name="x" size={32} color="#8584f9" />
        </ButtonIcon>
        <Texto>{status === 'new' ? 'Nova anotação' : 'Editar anotação'}</Texto>
        <SaveButton onPress={handleSaveButton}>
          <Icon name="save" size={32} color="#8584f9" />
        </SaveButton>
      </HeaderContainer>

      <Container>
        <Content>
          <TitleInput
            value={title}
            onChangeText={t => setTitle(t)}
            placeholder="Digite o título da anotação"
            placeholderTextColor="#fff"
            autoFocus={true}
          />
          <BodyInput
            value={body}
            onChangeText={b => setBody(b)}
            placeholder="Digite o sua anotação"
            placeholderTextColor="#8584f9"
            multiline={true}
            textAlignVertical="top"
          />

          {status === 'edit' && (
            <ButtonDelete onPress={handleDeleteNoteButton}>
              <Icon name="trash-2" size={32} color="#ff0000" />
            </ButtonDelete>
          )}
        </Content>
      </Container>
    </>
  );
};
