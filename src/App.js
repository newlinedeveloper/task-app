import React from 'react';
import { Container } from 'semantic-ui-react'

import './App.css';

import HeaderComponent from './components/header'
import HomeComponent from './components/home'



function App() {
  return (

     <React.Fragment>

      <Container>

         <HeaderComponent />
         <HomeComponent/>
         
      </Container>


     </React.Fragment>
    
  );
}

export default App;
