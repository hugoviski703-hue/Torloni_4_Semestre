import { createContext, useState } from "react";
// import axios from "axios";
import api from "../services/FakeAPIService";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [listagemTarefas, setListagemTarefas] = useState([])
    const [taskValue, setTaskValue] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [idToEdit, setIdToEdit] = useState(0)

    //getTasks
    const getTasks = async () => {
        try {
            const APIReturn = await api.get("/taskpoint")
            const APIData = await APIReturn.data

            setListagemTarefas(APIData)
        }
        catch (error) {
            console.log("Deu ruim na chamada da api")
            console.log(error)
        }
    }

    //////////////////////////////////
    //postTask
    const postTask = async (taskValue) => {
        try {
            await api.post("/taskpoint", { descricao: taskValue })
            await getTasks()
            setTaskValue("")//limpa o campo
        } catch (error) {
            console.log("Deu ruim na chamada da api")
            console.log(error)
        }
    }
    ////////////////////////
    //putTask
    const putTask = async () => {
        try {
            await api.put(`/taskpoint/${idToEdit}`,
                {
                    descricao: taskValue

                });
            await getTasks()
            setIdToEdit(0)
            setTaskValue("")
            setEditMode(false)

        } catch (error) {
            console.log("erro ao eidtar")
        }
    }
    ////////////////////////////
    //visualiza os dados no formulário para edição 
    const putTaskPreview = async (tarefa) => {
        setTaskValue(tarefa.descricao)
        setEditMode(true)
        setIdToEdit(tarefa.id)
    };
    //////////////////////
    const deleteTask = async (id) => {
        try {
            await api.delete(
                `/taskpoint/${id}`
            )

            await getTasks()

        } catch (error) {
            console.log("Deu ruim na chamada da api")
            console.log(error)
        }
    }
    return (
        <TaskContext.Provider value={{ listagemTarefas, setListagemTarefas, getTasks, postTask, deleteTask, taskValue, setTaskValue, putTaskPreview, putTask, editMode, setEditMode, setIdToEdit, idToEdit }}>
            {children}
        </TaskContext.Provider>
    )
}

