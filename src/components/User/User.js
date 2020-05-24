import React from 'react';
import style from './user.module.css'
import { NavLink } from 'react-router-dom';

export const User = (props) => {
    const {min, src, name} = props;

    return(
        <NavLink to='/#' className={`${min && style.min} ${style.user}`}>
            <img src={src}></img>
            <div>{name}</div>
        </NavLink>
    );
}