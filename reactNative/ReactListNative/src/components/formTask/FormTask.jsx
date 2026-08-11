import { Text, View } from "react-native"
import { FormTaskStyles } from "./FormTaskStyles"

export const FormTask = ()=>{
    return(
        <View style={FormTaskStyles.frmCadTask}>
            <Text style={FormTaskStyles.frmCadTitle}>Cadastro de tarefas</Text>
        </View>
    )
}