import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from './colors-config/colors';
import Login from './screens/Login';
import Typing from './screens/Typing';
import Result from './screens/Result';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Typing"
        screenOptions={{
          headerTransparent: true,
          headerTintColor: colors.yellow,
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Typing"
          component={Typing}
          options={{
            headerLeft: () => false,
          }}
        />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
