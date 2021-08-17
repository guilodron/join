import React from 'react'
import {
    Container,
    ColorLabel,
    TitleText
} from './styles'

const Title = ({children, textStyle}) => {
    return (
        <Container>
            <ColorLabel />
            <TitleText style={textStyle}>{children}</TitleText>
        </Container>
    )
}

export default Title
