import { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllLists } from './screens/AllLists';
import { SingleList } from './screens/SingleList';
import { AllInvites } from './screens/AllInvites';
import { Login } from './screens/Login';



export type StackParamList = {
  Login: undefined;
  AllLists: undefined;
  SingleList: { listId: string };
  AllInvites: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {

  return (
   <>
    <StatusBar barStyle={'light-content'} />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={ Login } />
        <Stack.Screen name="AllLists" component={ AllLists } />
        <Stack.Screen name="SingleList" component={ SingleList } />
        <Stack.Screen name="AllInvites" component={ AllInvites } />
      </Stack.Navigator>
    </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 16
  }
});
