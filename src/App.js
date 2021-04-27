import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase'

const Contenedor = styled.div`
display:flex;
align-items:center;
padding-top:5rem;
flex-direction:column-reverse;
`;
const Boton= styled.button`
background:-webkit-linear-gradient(top left,#007d35 0%, #007d35 45%, #0f574e 100%);
background-size:300px;
font-family:Arial, Helvetica, sans-serif;
color:#fff;
margin-top:3rem;
padding:1rem 3rem;
font-size:2rem;
border:2px solid black;
`;

function App() {
  //state de frase
  const [frase, guardarFrase] = useState({});

  //Cargar una Frase sin que se invoque el servicio solo con el refresh
  useEffect(() => {
    consultarApi()   
  }, [])

  const consultarApi= async()=>{
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]) ;
  }
  
  
  return (
    <Contenedor>     
    <Boton
    onClick={consultarApi}
    >Obtener Frase</Boton>
     <Frase
      frase = {frase}/>
    </Contenedor>
  );
}

export default App;
