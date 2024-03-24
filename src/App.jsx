import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' //Impoprtamos CSS
import MyCard from './components/MyCard'
import PieDePagina from './components/Footer'
import Titulo from './components/Header'

function App() {
// Este es el desafio sin los bedgs
//modificando el nombre de
  return (
    <>
      <Titulo title="Adopta un perrito"/>

        <div className='container'> 
            <div className='row'>
                <div className='col-md-4'>
                <MyCard
                    image="https://images.pexels.com/photos/10443834/pexels-photo-10443834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    name="Black Adam"
                    text="Un poco timido pero cariñoso. Black Adam es el compañero perfecto para esas tardes de compañia."
                    colorBadge="primary"
                    textBadge="Mestizo"
                    /> 
                </div>
                <div className='col-md-4'>
                    <MyCard
                    image="https://images.pexels.com/photos/46505/swiss-shepherd-dog-dog-pet-portrait-46505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    name="Copito de nieve"
                    text="Lindo perrito jugeton, con mucha energia, compañero ideal par el pequeño de la casa."
                    colorBadge="success"
                    textBadge="Pastor Alemán"
                    />
                </div>
                <div className='col-md-4'>
                    <MyCard
                    image="https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    name="Alexis"
                    text="Pocos meses de vida, lleno de ternura, Alexis nesecita una familia acogedora que derroche amor como el."
                    colorBadge="warning"
                    textBadge="Cockapoo"
                    />
                </div>
                <div className='col-md-4'>
                    <MyCard
                    image="https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    name="Princesa"
                    text="Esta simpatica y jugetona perrita te llenara de amor y alegrias todos tus días."
                    colorBadge="secondary"
                    textBadge="Pomerania"
                    />
                </div>
                <div className='col-md-4'>
                    <MyCard
                    image="https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    name="Chavito"
                    text="Este precioso Chavito espera esa acogedora compañia que solo el sabe valorar con su fidelidad."
                    colorBadge="info"
                    textBadge="Dachshund"
                    />
                </div>
                <div className='col-md-4'>
                    <MyCard
                    image="https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    name="Waipe"
                    text="Energias inagotables son las que Waipe derrocha en cada ocasión, perfecto para alegrar las tardes en familia."
                    colorBadge="warning"
                    textBadge="Caniche"
                    />
                </div>
            </div>
        </div>

        <PieDePagina/>  
    </>
  )
}

export default App
