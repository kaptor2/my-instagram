import React, { Component } from 'react';
import style from './header.module.css'
import { NavLink, BrowserRouter } from 'react-router-dom';
import logo  from '../../logo.svg'

export class Header extends Component {

    render() {
        return(
            <header className={`${style.header}`}>
                <div className={`${style.container} ${style.flex}`}>
                    <NavLink to='/lenta' className={`${style.logo}`}>
                        <img src={logo} alt='logo'/>
                    </NavLink>
                    <nav className={`${style.links}`}>
                        <ul>
                            <li> 
                                <NavLink to='/lenta' activeClassName={style.active} className={`${style.links__a}`}>Лента</NavLink>
                            </li>
                            <li> 
                                <NavLink to='/profile' activeClassName={style.active} className={`${style.links__a}`}>Профиль</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}