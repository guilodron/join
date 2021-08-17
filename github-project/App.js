import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './src/routes/stack';
import { UserProvider } from './src/context/userContext';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </UserProvider>
  );
}
