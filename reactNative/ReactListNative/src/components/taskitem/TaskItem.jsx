import { Text, TouchableOpacity, View, Image, Alert } from "react-native";
import { TaskItemStyle } from "./TaskItemStyle";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export const TaskItem = ({ id, descricao }) => {
    const { deleteTask, putTaskPreview } = useContext(TaskContext)

    const deleteTaskConfirm = (tarefa) => {
        Alert.alert("Apagar", `Você quer apagar${tarefa.descricao}`, [
            { text: "Não" },
            { text: "SIm", onPress:() =>{deleteTask(id)}},
        ] )
    }

return (
    <View style={TaskItemStyle.cardBox}>

        <Text style={TaskItemStyle.cardText}>
            {descricao}
        </Text>

        <View style={TaskItemStyle.imagesCard}>

            <TouchableOpacity
                style={TaskItemStyle.buttonEdit}
                onPress={() => {
                    putTaskPreview({id,descricao})
                }}
            >
                <Image
                    source={require("../../../assets/edit.png.png")}
                    style={TaskItemStyle.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={TaskItemStyle.buttonDelete}
                onPress={() => deleteTaskConfirm(id, descricao)}
            >
                <Image
                    source={require("../../../assets/trash.png.png")}
                    style={TaskItemStyle.icon}
                />
            </TouchableOpacity>

        </View>

    </View>
);
};