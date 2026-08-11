import { Text, TouchableOpacity, View, Image } from "react-native";
import { TaskItemStyle } from "./TaskItemStyle";

export const TaskItem = ({dados:{id, descricao}}) => {
    return (
        <View style={TaskItemStyle.cardBox}>
            <Text style={TaskItemStyle.cardText}>  {descricao} - {id}  
            </Text>

            <View style={TaskItemStyle.imagesCard}>

                <TouchableOpacity
                    style={TaskItemStyle.buttonEdit}
                    onPress={() => console.log("Editar")}
                >
                    <Image
                        source={require("../../../assets/edit.png.png")}
                        style={TaskItemStyle.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={TaskItemStyle.buttonDelete}
                    onPress={() => console.log("Excluir")}
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