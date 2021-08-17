import React, {useEffect} from 'react'
import { ActivityIndicator } from 'react-native'
import UserCard from '../../components/UserCard'
import { useUserContext } from '../../context/userContext'
import { 
    Container 
} from './styles'

const FollowersPage = ({navigation}) => {

    const {followers, loadFollowers} = useUserContext()
    useEffect(() => {
        if(!followers){
            loadFollowers()
        }
    }, [followers])

    return (
        <Container>
            {followers ? followers.map(user => <UserCard navigation={navigation} key={user.id} user={user} />) : <ActivityIndicator size="large" color="#FFCE00" />}
        </Container>
    )
}

export default FollowersPage
