import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' //Impoprtamos CSS
// import Card from 'react-bootstrap/Card'
// import Button  from 'react-bootstrap/Button' //Omportamos el componente
import MyCard from './components/MyCard'
import PieDePagina from './components/Footer'
import Titulo from './components/Header'

function App() {
// Este es el desafio sin los bedgs
  return (
    <>
      <Titulo title="Adopta un perrito"/>
        <div> 
      <MyCard
        image="https://picsum.photos/id/237/200/300"
        name="Gatito"
        text="Lindo perrito jugeton"
        colorButton="success"
        textButton="Adoptar"
        /> 
        <MyCard
        image="https://picsum.photos/id/237/200/300"
        name="Gatito"
        text="Lindo perrito jugeton"
        colorButton="success"
        textButton="Adoptar"
        />
        <MyCard
        image="https://picsum.photos/id/237/200/300"
        name="Gatito"
        text="Lindo perrito jugeton"
        colorButton="warning"
        textButton="Adoptar"

        />
        <MyCard
        image="https://picsum.photos/id/237/200/300"
        name="Gatito"
        text="Lindo perrito jugeton"
        colorButton="warning"
        textButton="Adoptar"
        
        />
        <MyCard
        image="https://picsum.photos/id/237/200/300"
        name="Gatito"
        text="Lindo perrito jugeton"
        colorButton="warning"
        textButton="Adoptar"
        
        />
        <MyCard
        image="https://picsum.photos/id/237/200/300"
        name="Gatito"
        text="Lindo perrito jugeton"
        colorButton="warning"
        textButton="Adoptar"
        
        />
        </div>

        <PieDePagina/>  
    </>
  )
}

export default App
