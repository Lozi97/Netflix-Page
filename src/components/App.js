import React from 'react';
import './App.css';
// import createRef  from 'react'
//import { Global, css } from '@emotion/core'
import Navbar from './Navbar'
import Home from './Home'
import ContentRow from './ContentRow'

function App() {
  return (
    <>
    
    <Navbar />

    <Home>
      <ContentRow  />
    </Home>

    {/* {categories.slice(1).map(category => (
      <ContentRow key={category} category={category} setActive={setActive} />
    ))} */}

    {/* <DetailPane
      category={category}
      top={bottom + window.scrollY}
      setActive={setActive}
    /> */}
    {/* <Footer /> */}
  </>
  );
}


export default App;
