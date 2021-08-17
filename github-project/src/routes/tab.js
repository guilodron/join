import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from '../pages/HomePage';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useUserContext } from '../context/userContext';
import ReposPage from '../pages/ReposPage';
import FollowingPage from '../pages/FollowingPage';
import FollowersPage from '../pages/FollowersPage';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {

    const {user, repos, following, followers, logOut} = useUserContext();

    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: '#A5A5A5'
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomePage}
                options={({navigation}) => (
                    {
                        headerRight: () => (
                            <TouchableOpacity 
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                onPress={() => logOut(navigation)}>
                                <Text style={{color: 'white', marginRight: 12, fontSize: 17}}>Sair</Text>
                                <Feather name="log-out" size={24} color="red" />
                            </TouchableOpacity>
                        ),
                        title: user.login,
                        headerStyle: {
                            backgroundColor: '#1F1F1F',
                        },
                        headerTitleAlign: 'flex-start',
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: 17
                        },
                        tabBarLabel: 'Home',
                        tabBarIcon: ({color}) => (
                            <Feather name='home' color={color} size={24} />
                        )
                    }
                )}
            />
            <Tab.Screen 
                name='Repos'
                component={ReposPage}
                options={({navigation}) => ({
                    title: `${repos ? repos.length : 'X'} repositórios`,
                    headerStyle: {
                        backgroundColor: '#1F1F1F',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 17
                    },
                    headerLeft: () => (
                        <TouchableOpacity 
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                            onPress={() => navigation.goBack()}>
                            <Feather style={{marginLeft: 15}} name="arrow-left" size={24} color="white" />
                        </TouchableOpacity>
                    ),
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                        <Feather name='github' color={color} size={24} />
                    )
                })}
            />
            <Tab.Screen 
                name='Followers'
                component={FollowersPage}
                options={({navigation}) => ({
                    title: `${followers ? followers.length : 'X'} seguidores`,
                    headerStyle: {
                        backgroundColor: '#1F1F1F',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 17
                    },
                    headerLeft: () => (
                        <TouchableOpacity 
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                            onPress={() => navigation.goBack()}>
                            <Feather style={{marginLeft: 15}} name="arrow-left" size={24} color="white" />
                        </TouchableOpacity>
                    ),
                    tabBarLabel: 'Seguidores',
                    tabBarIcon: ({color}) => (
                        <Feather name='users' color={color} size={24} />
                    )
                })}
            />
            <Tab.Screen 
                name='Following'
                component={FollowingPage}
                options={({navigation}) => ({
                    title: `${following ? following.length : 'X'} seguindo`,
                    headerStyle: {
                        backgroundColor: '#1F1F1F',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 17
                    },
                    headerLeft: () => (
                        <TouchableOpacity 
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                            onPress={() => navigation.goBack()}>
                            <Feather style={{marginLeft: 15}} name="arrow-left" size={24} color="white" />
                        </TouchableOpacity>
                    ),
                    tabBarLabel: 'Seguindo',
                    tabBarIcon: ({color}) => (
                        <Feather name='users' color={color} size={24} />
                    )
                })}
            />
        </Tab.Navigator>
    )
}

export default TabRoutes
