import React from 'react'
import SearchBar from '../SearchBar'
import styles from "./NavBar.module.css";

const NavBar = (props) => {
    const {onSearch}= props;

  return (
    <div>
        <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default NavBar;

