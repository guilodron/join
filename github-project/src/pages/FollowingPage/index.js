import React, {useEffect} from 'react'
import { ActivityIndicator } from 'react-native'
import UserCard from '../../components/UserCard'
import { useUserContext } from '../../context/userContext'
import { 
    Container 
} from './styles'

const FollowingPage = ({navigation}) => {

    const {following, loadFollowing} = useUserContext()
    useEffect(() => {
        if(!following){
            loadFollowing()
        }
    }, [following])

    return (
        <Container>
            {following ? following.map(user => <UserCard navigation={navigation} key={user.id} user={user} />) : <ActivityIndicator size="large" color="#FFCE00" />}
        </Container>
    )
}

export default FollowingPage
