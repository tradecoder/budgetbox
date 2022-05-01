import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignupScreen, LoginScreen } from './app/screens/screenLibrary';


const Stack: any = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'orange' }, headerTitleStyle: { color: 'black' }, cardStyle: { backgroundColor: 'white' } }}>
        <>        
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: "Sign up" }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Login" }} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
