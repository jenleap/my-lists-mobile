import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button, TextInput, Alert, StyleSheet, Pressable, Linking } from "react-native"
import { StackParamList } from "../App";
import { useState, useContext } from "react";
import { signIn } from "../utils/auth";
import { AuthContext } from "../store/auth.context";
import { webUrl } from "../utils/constants";

export const Login = ({ navigation }: NativeStackScreenProps<StackParamList, 'Login'>) => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const authContext = useContext(AuthContext);

    const handleLogin = async () => {
        try {
            const token = await signIn({ username, password });
            authContext.signIn(token);
        } catch (e) {
            Alert.alert("Login failed.");
        }
        navigation.navigate("AllLists");
    }

    const handleOnForgot = () => {
        Linking.openURL(webUrl);
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.subContainer }>
                <Text style={ styles.label }>Username</Text>
                <TextInput style={ styles.textInput }
                    onChangeText={ (text: string) => setUsername(text) }
                />
                <Text style={ styles.label }>Password</Text>
                <TextInput style={ styles.textInput } 
                    secureTextEntry
                    onChangeText={ (text: string) => setPassword(text) }
                />
                <Button
                    title="Login"
                    onPress={ handleLogin }
                />
                 <Pressable
                    style={ styles.pressableContainer }
                    onPress={ handleOnForgot }
                >
                     <Text style={ styles.pressableText }>Forgot password?</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    subContainer: {
        marginTop: 100,
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'darkgrey',
        width: '80%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
    },
    label: {
        color: 'white',
        marginBottom: 4,
    },
    textInput: {
        borderRadius: 4,
        marginBottom: 20,
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: 'white',
        fontSize: 16,
    },
    pressableContainer: {
        marginTop: 10
    },
    pressableText: {
        color: 'white'
    }
  });