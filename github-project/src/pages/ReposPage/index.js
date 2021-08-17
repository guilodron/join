import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import RepoCard from '../../components/RepoCard'
import { useUserContext } from '../../context/userContext'
import {
    Container
} from './styles'

const ReposPage = () => {

    const {repos, loadRepos} = useUserContext()
    useEffect(() => {
        if(!repos){
            loadRepos()
        }
    }, [repos])

    return (
        <Container contentContainerStyle={{paddingTop: 30}}>
            {repos ? repos.map(repo => <RepoCard key={repo.id} repo={repo} />) : <ActivityIndicator size="large" color="#FFCE00" />}
        </Container>
    )
}

export default ReposPage
