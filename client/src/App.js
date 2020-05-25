import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
  );
}

export default App;