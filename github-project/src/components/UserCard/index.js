import React from 'react'
import {
    Container,
    ColorLabel,
    Avatar,
    UserName
} from './styles'
import { Feather } from '@expo/vector-icons';

const UserCard = ({user, navigation}) => {
    return (
        <Container onPress={() => navigation.navigate('User', {user: user})}>
            <ColorLabel />
            <Avatar source={{uri: user.avatar_url}} />
            <UserName>{user.login}</UserName>
            <Feather name="arrow-right" size={24} color="white" />
        </Container>
    )
}

export default UserCard
