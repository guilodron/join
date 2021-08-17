import React, {createContext, useState, useContext} from 'react'
import api from '../api';

const UserContext = createContext({});

const UserProvider = ({children}) => {

    const [user, setUser] = useState();
    const [repos, setRepos] = useState(null);
    const [following, setFollowing] = useState(null);
    const [followers, setFollowers] = useState(null);

    const loadUserInfo = async (username) => {
        console.log('loaduser')
        const userRes = await api.get(`/users/${username}`);
        setUser(userRes.data)       
    }

    const loadRepos = async () => {
        const reposRes = await api.get(`/users/${user.login}/repos`);
        setRepos(reposRes.data);
    }

    const loadFollowing = async () => {
        const followingRes = await api.get(`/users/${user.login}/following`);
        setFollowing(followingRes.data);
    }

    const loadFollowers = async () => {
        const followersRes = await api.get(`/users/${user.login}/followers`);
        setFollowers(followersRes.data);
    }

    const logOut = (navigation) => {
        setUser(null);
        setFollowing(null);
        setRepos(null);
        setFollowers(null);
        navigation.navigate('Login');
    }

    const changeUser = async (newUser, navigation) => {
        await loadUserInfo(newUser.login)
        setFollowing(null);
        setRepos(null);
        setFollowers(null);
        navigation.navigate('Home')
    }

    return (
        <UserContext.Provider value={{
            loadUserInfo, 
            user: user, 
            repos: repos, 
            loadRepos, 
            loadFollowing,
            loadFollowers,
            following: following,
            followers: followers,
            logOut,
            changeUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("userContext must be used within an UserProvider");
    }
    return context;
};

export {UserProvider, useUserContext};

