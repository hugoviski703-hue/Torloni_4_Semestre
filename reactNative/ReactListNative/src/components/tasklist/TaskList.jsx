    import { ScrollView } from "react-native"
    import { TaskListStyle } from "./TaskListStyle"
    import { TaskItem } from "../taskitem/TaskItem"
    import { useEffect, useState } from "react"
    import axios from "axios";

    export const TaskList = () => {
        const [listaTarefas, setListaTarefas] = useState([
        
        ])

        //criar as funções
        //getTasks
        const getTasks = async () =>{
            try {
                const APIReturn = await axios.get("http://172.16.2.65:3000/taskpoint")
                const APIData = await APIReturn.data

                setListaTarefas(APIData)
            } 
            catch (error) {
                console.log("Deu ruim na chamada da api")
                console.log(error)
            }
        }
        //////////////////////////////////
        //cadTask
        const cadTask = async () =>{
        
        
        }
        ////////////////////////
        //putTask
        const putTask = (id, novaDescricao) =>{
            const novaLista = listaTarefas.map((tarefa) =>{
                if(tarefa.id === id) {
                    return{
                        tarefa,
                        descricao: novaDescricao
                    };
                }
                return tarefa
            })
        }
        //////////////////////
        //deleteTask
    

        return (
            <ScrollView style={TaskListStyle.taskListContainer}>
                {
                    listaTarefas.map((tarefa) => {
                        return (

                            <TaskItem dados={tarefa}/>
                        )
                    })
                }
            </ScrollView>

        )
    }