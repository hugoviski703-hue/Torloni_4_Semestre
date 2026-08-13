import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { FormTaskStyles } from "./FormTaskStyle"
import { useContext, useState } from "react"
import { TaskContext } from "../../context/TaskContext"

export const FormTask = () => {
    const { postTask, getTasks, taskValue, setTaskValue, editMode, setEditMode,putTask, setIdToEdit } =
     useContext(TaskContext)


    const saveTask = () => {
        console.log(`texto digitado`)
        postTask(taskValue)
        getTasks()

        Alert.alert("adicionar tarefa",
            "Tarefa adicionada",
            [
                { text: "okk" },
                { text: "okk2", onPress: () => setTaskValue('Okk 2 pressed') }
            ])
    }

    return (
        <View style={FormTaskStyles.formTaskBox}>
            <TextInput
                placeholder="Adicione uma tarefa"
                style={FormTaskStyles.taskInputName}
                value={taskValue}
                onChangeText={(textoDigitado) => {
                    setTaskValue(textoDigitado)
                }}
            />
            <TouchableOpacity
                style={FormTaskStyles.taskButton}
                onPress={()=>{
                    if(editMode)
                        putTask()
                    else
                        saveTask()
                }}
            >
                <Text style={FormTaskStyles.taskButtonText}>
                    Salvar
                </Text>
            </TouchableOpacity>


            {//botao cancelar
                editMode && (
                    <TouchableOpacity
                        style={FormTaskStyles.taskButton}
                        onPress={() => {
                            setEditMode(false)//cancela modo de edição
                            setTaskValue("")//limpa o form
                            setIdToEdit(0)//zera o id
                        }}
                    >
                        <Text style={FormTaskStyles.taskButtonText}>
                            Cancelar
                        </Text>
                    </TouchableOpacity>
                )
            }

            <Text style={FormTaskStyles.taskButtonText}   >Cancelar</Text>
        </View>
    );
}