import { View, Text } from "react-native"
import { StackParamList } from "../App"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export const AllLists = ({ navigation }: NativeStackScreenProps<StackParamList, 'AllLists'>) => {

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