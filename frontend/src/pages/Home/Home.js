import React, { useEffect } from 'react'
import { useState } from 'react'
import { useAuthentication } from "../../hooks/useAuthentication"
import Modal from 'react-modal';
import "./Home.css"
import Axios from 'axios'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '0%',
    bottom: 'auto',
    marginRight: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

const Home = () => {

    //Projeto
    const[name, setName] = useState("")
    const[password, setPassword] = useState("")
    const[error, setError] = useState("")
    const [margemhoras, setMargemhoras] = useState("")
    const [datainicio, setDatainicio] = useState("")
    const [saldodehoras, setSaldodehoras] = useState("")
    const [horasprevistas, setHorasprevistas] = useState("")
    const [dataentrega, setDataentrega] = useState("")


    const [project, setProject] = useState([])
    const [task, setTask] = useState([])
    //Tarefa
    const [nametarefa, setNametarefa] = useState("")
    const [respon, setRespon] = useState("")
    const [horasprevtarefas, setHorasprevtarefa] = useState("")
    const [horasclientetarefa, setHorasclientetarefa] = useState("")
    const [margemhorastarefa, setMargemhorastarefa] = useState("")
    const [horastrabtarefa, setHorastrabtatefa] = useState("")
    const [porcentarefa, setPorcentarefa] = useState("")

    const{login, error: authError, loading} = useAuthentication()

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function CloseModal() {
      setIsOpen(false);
      const id = Math.floor(Math.random() * 1000)

      
      useEffect(() => {
        fetch(`http://localhost:3000/task`)
        .then((res) => res.json())
        .then(
          (resultado) => {
            setTask(resultado)
          }
        )
      })



      console.log(task)
    }

    const HandleSubmit = async (e) =>{
        e.preventDefault()

        setError("")

       
        console.log(project)

        useEffect(() => {
          fetch(`http://localhost:3000/project`)
          .then((res) => res.json())
          .then(
            (resultado) => {
              setProject(resultado)
            }
          )
        })

       
    }

  


  return (
    <div className="projetos">
        <h1>Cadastro de Projeto</h1>
        <form onSubmit={HandleSubmit}>
         
            <label>
                <span>Nome do Projeto:</span>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" required placeholder="Nome do Projeto"/>
            </label>

            <label>
                <span>Responsável:</span>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="name" name="name" required placeholder="Responsavel pelo Projeto"/>
            </label>

            <label>
              <span>Data de Inicio:</span>
              <input value={datainicio} onChange={(e) => setDatainicio(e.target.value)} type="date" name="data" required placeholder='Data de Inicio'  />
            </label>

            <label>
              <span>Data de Entrega:</span>
              <input value={dataentrega} onChange={(e) => setDataentrega(e.target.value)} type="date" name="data" required placeholder='Data de Inicio'  />
            </label>


            <button onClick={openModal}>Adicionar Tarefas</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={CloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Adicionar Tarefa</h2>
        <button onClick={CloseModal}>Adicionar Tarefa</button>
        <form>
          <label>Nome da Tarefa:</label>
          <input value={nametarefa} onChange={(e) => setNametarefa(e.target.value)} type="name" name="nametarefa" required placeholder="Nome da Tarefa"/>
          <label>Responsavel pela tarefa:</label>
          <input value={respon} onChange={(e) => setRespon(e.target.value)} type="name" name="respon" required placeholder='Responsavel pela tarefa' />
          <label>Horas Previstas:</label>
          <input value={horasprevtarefas} onChange={(e) => setHorasprevtarefa(e.target.value)} type="number" name="horasprevtarefa" required placeholder='Horas Previstas Da tarefa' />
          <label>Margem de Horas:</label>
          <input value={margemhorastarefa} onChange={(e) => setMargemhorastarefa(e.target.value)} type="number" name="margemhorastarea" required placeholder='Margem de Horas da tarefa'/>
        </form>
      </Modal>
      {task.map((tasks, i) =>{
        <span key={i} >{tasks}</span>
      } )}
      <label>
        <span>{nametarefa}</span>
        </label>
            <label>
              <span>Margem de Horas:</span>
              <input value={margemhoras} onChange={(e) => setMargemhoras(e.target.value)} type="hour" name='margemhoras' required placeholder='Margem de Horas'/>
            </label>

            <label>
              <span>Horas previstas:</span>
              <input value={horasprevistas} onChange={(e) => setHorasprevistas(e.target.value)} type="hour" name='horasprevistas' required placeholder='Horas Previstas'/>
            </label>

            <label>
              <span>Saldo de Horas:</span>
              <input value={saldodehoras} onChange={(e) => setSaldodehoras(e.target.value)} type="hour" name='saldodehoras' required placeholder='Saldo de Horas'/>
            </label>

            
            {!loading &&<button className="btn">Cadastrar Projeto</button>}
            {loading && <button className="btn" disable>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
            
            
        </form>
    </div>
  )
}

export default Home