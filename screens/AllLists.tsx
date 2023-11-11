import { View, Text } from "react-native"
import { StackParamList } from "../App"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useEffect } from "react"


export const AllLists = ({ navigation }: NativeStackScreenProps<StackParamList, 'AllLists'>) => {

    useEffect(() => {
        
    }, []);

    const handleListSelect = () => {
        navigation.navigate("SingleList", {
            listId: "1"
        });
    }

    return (
        <View>
            <Text>All lists</Text>
        </View>
    )
}