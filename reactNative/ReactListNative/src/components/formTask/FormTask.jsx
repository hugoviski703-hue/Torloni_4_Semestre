import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { FormTaskStyles } from "./FormTaskStyle"
import {useState} from "react"

export const FormTask = () => {

    const [taskValue, setTaskValue] = useState("")

    const saveTask = ()=>{
        console.log(`texto digitado`)
        Alert.alert("adicionar tarefa",
             "Tarefa adicionada",
             [
                {text: "okk"},
                 {text: "okk2", onPress: () => setTaskValue( 'Okk 2 pressed')}
            ])
    }

    return (
        <View style={FormTaskStyles.formTaskBox}>
            <TextInput
            placeholder="Adicione uma tarefa"
                style={FormTaskStyles.taskInputName}
                value={taskValue}
                onChangeText={(textoDigitado)=>{
                    setTaskValue(textoDigitado)
                }}
            />
            <TouchableOpacity style={FormTaskStyles.taskButton}
                onPress={()=>{
                    saveTask()
                }}
                
            >



                <Text
                style={FormTaskStyles.taskButtonText}
                
                >Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}