import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button, TextInput, Alert } from "react-native"
import { StackParamList } from "../App";
import { useState, useContext } from "react";
import { signIn } from "../utils/auth";
import { AuthContext } from "../store/auth.context";

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

    return (
        <View>
            <Text>Login</Text>
            <TextInput 
                placeholder="Username"
                onChangeText={ (text: string) => setUsername(text) }
            />
            <TextInput 
                placeholder="Password"
                secureTextEntry
                onChangeText={ (text: string) => setPassword(text) }
            />
            <Button 
                title="Login"
                onPress={ handleLogin }
            />
        </View>
    )
}