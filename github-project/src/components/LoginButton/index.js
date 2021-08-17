import React from 'react'
import {
    Container,
    ButtonText
} from './styles';
import { Feather } from '@expo/vector-icons';

const LoginButton = ({onPress}) => {
    return (
        <Container onPress={onPress}>
            <ButtonText>ENTRAR</ButtonText>
            <Feather name="arrow-right" size={24} color="black" />
        </Container>
    )
}

export default LoginButton
