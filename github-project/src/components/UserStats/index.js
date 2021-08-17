import React from 'react'
import {
    Container,
    Value,
    Number,
    Label
} from './styles'

const UserStats = ({followers, following, repos}) => {
    return (
        <Container>
            <Value>
                <Number>{followers}</Number>
                <Label>Seguidores</Label>
            </Value>
            <Value>
                <Number>{following}</Number>
                <Label>Seguindo</Label>
            </Value>
            <Value>
                <Number>{repos}</Number>
                <Label>Repos</Label>
            </Value>
        </Container>
    )
}

export default UserStats
