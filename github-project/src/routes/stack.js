import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginPage from '../pages/LoginPage';
import TabRoutes from './tab';
import UserPage from '../pages/UserPage';
import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';
import { useUserContext } from '../context/userContext';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {

    const {changeUser} = useUserContext()

    return (
        <Stack.Navigator screenOptions={{headerShown: false, contentStyle: {backgroundColor: '#292929'}}} >
            <Stack.Screen name='Login' component={LoginPage} />
            <Stack.Screen 
                options={{headerShown: false}} 
                name='Tabs' 
                component={TabRoutes} 
            />
            <Stack.Screen 
                options={({route, navigation}) => ({
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#1F1F1F',
                    },
                    headerTintColor: 'white',
                    title: route?.params.user.login,
                    headerRight: () => (
                        <TouchableOpacity 
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                            onPress={() => changeUser(route.params.user, navigation)}>
                            <Text style={{color: 'white', marginRight: 12, fontSize: 17}}>Salvar</Text>
                            <Feather name="log-in" size={24} color="green" />
                        </TouchableOpacity>
                    ),
                })}
                name='User' 
                component={UserPage}
            />
        </Stack.Navigator>
    )
}

export default StackRoutes;
