import React, { useEffect, useState } from 'react'
import api from '../../api';
import Title from '../../components/Title';
import UserStats from '../../components/UserStats';
import { 
    Container,
    AvatarTile,
    Avatar,
    NameInfo,
    InfoText
} from './styles'

const UserPage = ({route}) => {

    const user = route.params.user;
    const [selectedUser, setSelectedUser] = useState();

    const loadSelectedUser = async () => {
        const selectedRes = await api.get(`/users/${user.login}`)
        setSelectedUser(selectedRes.data);
    }

    useEffect(() => {
        loadSelectedUser();
    }, [route])

    return (
        <Container contentContainerStyle={{alignItems: 'center'}}>
            <AvatarTile />
            <Avatar source={{uri: user.avatar_url}} />
            <NameInfo>
                <Title>{selectedUser?.name}</Title>
                {selectedUser?.email && <InfoText>{selectedUser?.email}</InfoText>}
                {selectedUser?.location && <InfoText>{selectedUser?.location}</InfoText>}
            </NameInfo>
            <UserStats 
                followers={selectedUser?.followers} 
                following={selectedUser?.following} 
                repos={selectedUser?.public_repos}    
            />
            <NameInfo>
                <Title>BIO</Title>
                {selectedUser?.bio && <InfoText>{selectedUser?.bio}</InfoText>}
            </NameInfo>
        </Container>
    )
}

export default UserPage
