import iconEdit from "./assets/Vector (1).svg"
import trashEdit from "./assets/Vector.svg"
import './App.css'
import { useEffect, useState } from "react"
import axios from "axios"


function App() {
  // states e variáveis


  //criar um state chamado
  //tasklist como iniciando com um array de 
  //objetos [{xpto: abc, iii: uuu}]
  //ja preenchido com 4 tarefas

  //em seguida fazer um map e gerar os cards (article)
  //com todas as tarefas

  const [tasklist, setTasklist] = useState([]);
  //representa a lista de tarefas array de objetos
  const [taskValue, setTaskValue] = useState("")
  //modo de edição true / false
  const [editMode, setEditMode] = useState(false)
  //id do cadastro a ser editado 
  const [idToEdit, setIdToEdit] = useState(0)
  //CRUD

  //  READ
  // GET
  const getTask = async () => {
    //chamar a api
    try {
      const APIReturn = await axios.get("http://localhost:3000/taskpoint")
      const dataAPI = await APIReturn.data
      //armazenar os dados no state
      console.log(dataAPI)
      setTasklist(dataAPI)
    } catch (error) {

    }

  }

  //////////////////////////////////////////
  // POST
  const createTask = async (e) => {
    //parar / capturar o evento de submit do formulário
    e.preventDefault()
    // if (taskValue.trim().length == ) {

    // }

    //validar o formulário
    //cadastrar os dados (try/ctach)
    try {
      const respostaAPI = await axios.post("http://localhost:3000/taskpoint", {
        descricao: taskValue
      })
      alert("tarefa cadastrada")
      const dataAPI = await respostaAPI.data
      getTask();
    } catch (error) {
      console.error("Erro ao cadastrar tarefa:");
    }
    //recarregar os dados na tela (getTask)


  }

  //////////////////////////////////////////

  // PUT
  //visualizar edição (ver os dados no formulário)
  const putTask = (taskItem) => {
    //legar os dados para o formulario(setTaskValue)
    setTaskValue(taskItem.descricao)
    //sinalizar o formulário que é para editar e ao inves de cadastrar(set)
    setEditMode(true)
    //preeencher o ud para edição (true)
    setIdToEdit(taskItem.id)
  }

  const confirmPutTask = async (e) => {
    e.preventDefault()
    //validar o form
    if (taskValue.trim().length == 0) {
      alert("Preencha a tarefa corretamente")
      return false
    }

    try {
      axios.put(`http://localhost:3000/taskpoint/${idToEdit}`, {
        descricao: taskValue
      })
      alert("a tarefa foi editada")
      //atualiza o cadastro na tela
      getTask()
      //reseta os dados da edição na edição e formulário
      setEditMode(false)
      setIdToEdit(0)
      setTaskValue("")
    } catch (error) {
      alert("erro ao editar tarefa")
    }
  }


  //////////////////////////////////////////

  // DELETE
  const deleteTask = async (taskItem) => {
    const querApagar = confirm(`Deseja realmente apagar?:'${taskItem.descricao}'`)
    if (!querApagar) return false

    try {
      await axios.delete(`http://localhost:3000/taskpoint/${taskItem.id}`);
      {
        getTask();
        alert("Registro apagado com sucesso")
      }
    } catch (error) {
      console.error("Erro ao excluir tarefa:");
    }
  }

  // montagem do componente - ciclo de vida dos componentes
  useEffect(() => {
    getTask()
  }, [])
  // funções e effects

  return (
    <>
      <header className="header-section">
        <h1 className="header-section__title">React List</h1>
      </header>

      <main className="body-section">
        <form action="" className="cad-task" onSubmit={editMode ? confirmPutTask : createTask}>

          <input type="text"
            className="cad-task__entry"
            placeholder='Adcione uma tarefa'
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)} />
          <p>State: {taskValue}</p>
          <p>id para editar: {idToEdit}</p>
          <button className="cad-task__btn-confirm">Adicionar</button>
          {
            editMode && (

              <button
                className="cad-task__btn-confirm"
                type="button"
                onClick={() => {
                  //reseta os dados da edição na edição e formulário
                  setEditMode(false)
                  setIdToEdit(0)
                  setTaskValue("")
                }}>
                Cancelar
              </button>
            )
          }


        </form>
        <section className="cardlist">

          {
            tasklist.map(task => {
              return (
                //colocat o article todo
                <article className="cardtask" key={task.id}>
                  <p className="cardtask__task-text">{task.descricao}</p>

                  <div className="cardtask__icon-box">

                    <div className="cardlist__icon">  <img
                      src={iconEdit}
                      alt="Imagem de uma caneta - ação editar tarefa"
                      onClick={() => {
                        putTask(task)
                      }}
                    /></div>

                    <div className="cardlist__icon">
                      <img
                        src={trashEdit}
                        alt="Imagem de uma lixeria - ação excluir tarefa"
                        onClick={() => {
                          deleteTask(task)
                        }}
                      />
                    </div>

                  </div>

                </article>

              )
            })
          }


        </section>

      </main>

      <footer className="footer-section">
        <p className="footer-section__right-text">
          2026 React List - Todos os direitos reservados
        </p>
      </footer>
    </>
  )
}

export default App