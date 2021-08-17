import React from 'react'
import Title from '../../components/Title';
import UserStats from '../../components/UserStats';
import { useUserContext } from '../../context/userContext'
import { 
    Container,
    AvatarTile,
    Avatar,
    NameInfo,
    InfoText
} from './styles'

const HomePage = () => {

    const {user} = useUserContext();

    return (
        <Container contentContainerStyle={{alignItems: 'center'}}>
            <AvatarTile />
            <Avatar source={{uri: user.avatar_url}} />
            <NameInfo>
                <Title>{user.name}</Title>
                {user.email && <InfoText>{user?.email}</InfoText>}
                {user.location && <InfoText>{user?.location}</InfoText>}
            </NameInfo>
            <UserStats 
                followers={user.followers} 
                following={user.following} 
                repos={user.public_repos}    
            />
            <NameInfo>
                <Title>BIO</Title>
                {user.bio && <InfoText>{user?.bio}</InfoText>}
            </NameInfo>
        </Container>
    )
}

export default HomePage
