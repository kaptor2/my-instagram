import React from 'react';
import style from './App.module.css';
import { Header } from './components/Header/Header';
import { Feed } from './components/Feed/Feed';
import { BrowserRouter, Route} from 'react-router-dom';
import { Profile } from './components/Profile/Profile';

export const App = () => {

  

  return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <div className={style.content}>
            <Route exact path="/" component={Feed} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </BrowserRouter>
      </div>
  );
}

