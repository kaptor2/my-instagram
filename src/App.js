import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Feed } from './components/Feed/Feed';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Feed/>
      </BrowserRouter>
    </div>
  );
}

