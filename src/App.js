//importaciones comunes
import { useState } from 'react';
import axios from 'axios';
//estilos
import './App.css';
//Componentes
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar/NavBar';


function App() {
   const [characters, setCharacters]=useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = (id)=>{
      //const charactersFiltered = characters.filter((char)=> char.id !== id)
      setCharacters(characters.filter((char)=> char.id !== Number(id)))
   }
   return (
      <div className='App'>
         {/*<SearchBar onSearch={(characterID) => window.alert(characterID)} />*/}
         <NavBar onSearch={onSearch}/> 
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
};

   



export default App;
