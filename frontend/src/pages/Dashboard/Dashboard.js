import React from 'react'
import { NavLink } from 'react-router-dom'
import './Dashboard.css'


const Dashboard = () => {
  return (
    <>
    <div className='dashboard'>
        <NavLink to="/cadastro">Adicionar Projeto +</NavLink>
    </div>
    <div className='project'>

    </div>
    </>
  
  )
}

export default Dashboard