import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const {onSearch} = props;

   const [id, setId]= useState();

   //guarda el id que esta dando el usuario 
   const handLeChange =(e) => {
      setId(e.target.value);
   }
   return (
      <div className={styles.navBar}>
         <div className={styles.wrapperSearch}>
            <input 
               className={styles.input} 
               type='search'
               onChange={handLeChange} 
               value= {id}
            />
                <button className ={styles.btn} onClick={()=>{onSearch(id)}}>
                   Search
                </button> 
         </div>
      </div>
   );
}
