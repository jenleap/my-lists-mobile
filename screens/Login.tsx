import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native"
import { StackParamList } from "../App";

export const Login = ({ navigation }: NativeStackScreenProps<StackParamList, 'Login'>) => {

    const handleLogin = () => {
        navigation.navigate("AllLists");
    }

    return (
        <View>
            <Text>Login</Text>
            <Button 
                title="Add"
                onPress={ handleLogin }
            />
        </View>
    )
}