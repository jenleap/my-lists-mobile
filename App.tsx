import { useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllLists } from './screens/AllLists';
import { SingleList } from './screens/SingleList';
import { AllInvites } from './screens/AllInvites';
import { Login } from './screens/Login';
import { AuthContext, AuthProvider } from './store/auth.context';
import { Icon } from '@rneui/themed';


export type StackParamList = {
  Login: undefined;
  AllLists: undefined;
  SingleList: { listId: string };
  AllInvites: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'lightgrey' },
        headerTintColor: 'grey',
        contentStyle: { backgroundColor: 'lightgrey' },
      }}
    >
        <Stack.Screen name="Login" component={ Login } />
    </Stack.Navigator>
  )
}

const AuthenticatedStack = () => {
  const authContext = useContext(AuthContext);
  
  return (
    <Stack.Navigator initialRouteName='AllLists'>
        <Stack.Screen 
          name="AllLists" 
          component={ AllLists } 
          options={{ 
            title: 'My Lists',
            headerRight: () => <Icon name="logout" size={24} onPress={ authContext.signOut }/>
          }}
        />
        <Stack.Screen name="SingleList" component={ SingleList } />
        <Stack.Screen name="AllInvites" component={ AllInvites } />
      </Stack.Navigator>
  )
}

const Navigation = () => {
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      { authContext.isAuthenticated ? <AuthenticatedStack /> : <AuthStack /> }
    </NavigationContainer>
  )
}

export default function App() {

  return (
   <AuthProvider>
    <StatusBar barStyle={'light-content'} />
      <Navigation />
   </AuthProvider>
  );
}
