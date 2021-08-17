import React from 'react'
import { Text } from 'react-native'
import {
    Container,
    TextInput,
    ErrorText
} from './styles'

const Input = ({erro, onChangeText}) => {
    return (
        <Container>
            <TextInput onChangeText={onChangeText} placeholder='Usuário' />
            {!!erro && <ErrorText>{erro}</ErrorText>}
        </Container>
    )
}

export default Input
