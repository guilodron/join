import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import {
    Container
} from './styles'
import Input from '../../components/Input';
import LoginButton from '../../components/LoginButton';
import { useUserContext } from '../../context/userContext';

const LoginPage = ({navigation}) => {

    const {loadUserInfo} = useUserContext()
    const [user, setUser] = useState('');
    const [erro, setErro] = useState('');

    const handlePress = async () => {
        if(user === ''){
            setErro('Campo obrigatório');
        }
        try{
            await loadUserInfo(user);
            navigation.navigate('Tabs');
        }catch(e){
            console.log(e)
            setErro('Usuário inválido');
        }
    }

    return (
        <Container>
            <AntDesign name="github" size={96} color="#FFCE00" />
            <Input onChangeText={setUser} erro={erro} />
            <LoginButton onPress={handlePress} />
        </Container>
    )
}

export default LoginPage
