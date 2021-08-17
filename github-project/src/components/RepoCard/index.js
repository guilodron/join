import React from 'react'
import { View } from 'react-native'
import Title from '../Title'
import { 
    Container,
    Text,
    StarredAndPermission,
    Line
} from './styles'
import { Feather } from '@expo/vector-icons';

const RepoCard = ({repo}) => {
    return (
        <Container>
            <Title textStyle={{fontSize: 20}}>{repo.name}</Title>
            <Text>{repo.description}</Text>
            <StarredAndPermission>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Feather name="star" size={17} color="#FFCE00" />
                    <Text style={{marginLeft: 5, padding: 0}}>{repo.stargazers_count}</Text>
                </View>
                {repo.private ? <Feather name="lock" size={17} color="#CC042A" /> : <Feather name="unlock" size={17} color="#63BF1F" />}
            </StarredAndPermission>
            <Line />
        </Container>
    )
}

export default RepoCard
