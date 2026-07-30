import iconEdit from "./assets/Vector (1).svg"
import trashEdit from "./assets/Vector.svg"
import './App.css'
import { useState } from "react"

function App() {
  // states e variáveis


  //criar um state chamado
  //tasklist como iniciando com um array de 
  //objetos [{xpto: abc, iii: uuu}]
  //ja preenchido com 4 tarefas

  //em seguida fazer um map e gerar os cards (article)
  //com todas as tarefas

    const [tasklist, setlist] = useState([
      {id: 1, descricao: "estudar react js"},
      {id: 2, descricao: "Revisar reactJs"},
      {id: 3, descricao: "Revisar html semântica"},
      {id: 4, descricao: "estudar react js"},
    ]);



  // funções e effects

  return (
    <>
      <header className="header-section">
        <h1 className="header-section__title">React List</h1>
      </header>

      <main className="body-section">
        <form action="" className="cad-task">

          <input type="text" className="cad-task__entry" placeholder='Adcione uma tarefa' />
          <button className="cad-task__btn-confirm">Adicionar</button>
        </form>
        <section className="cardlist">

          {
          tasklist.map(task => {
            return(
              //colocat o article todo
              <article className="cardtask">
            <p className="cardtask__task-text">{task.descricao}</p>

            <div className="cardtask__icon-box">

              <div className="cardlist__icon">  <img
                src={iconEdit}
                alt="Imagem de uma caneta - ação editar tarefa" /></div>
            
              <div className="cardlist__icon">
                <img
                  src={trashEdit}
                  alt="Imagem de uma lixeria - ação excluir tarefa" />
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