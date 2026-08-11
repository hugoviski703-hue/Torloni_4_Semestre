import { Text, View } from "react-native";
import { TaskItemStyle } from "./TaskItemStyle";

export const TaskItem = () =>{
    return(
        <View style={TaskItemStyle.cardBox}>
            <text>Tast item component</text>
        </View>
    )
}