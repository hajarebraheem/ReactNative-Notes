import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {connect} from 'react-redux';
import colors from './colors-config/colors';
import Login from './screens/Login/Login';
import Typing from './screens/Typing/Typing';
import Result from './screens/Result/Result';

const mapStateToProps = (state: {auth: any; notes: any}) => ({
  states: {
    auth: state.auth,
  },
});

export const Main = (props: {states: {auth: {value: any}}}) => {
  const Stack = createNativeStackNavigator();
  let screen;

  props.states.auth.value ? (screen = 'Typing') : (screen = 'Login');

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screen}
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

export default connect(mapStateToProps)(Main);
