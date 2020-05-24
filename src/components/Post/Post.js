import React from 'react'
import style from './post.module.css'
import { User } from '../User/User'

export const Post = (props) => {
    
    const key = props.id;

    return(
        <div key={ props.id } className={`${style.left} ${style.post}`}>
            <User 
                src={props.photo}
                name={props.name}
                min
            />
            <img src={`${props.src}`}/>
            <div className={`${style.name}`}>
                {props.alt}
            </div>
            <div className={`${style.descr}`}>
                {props.descr}
            </div>
        </div>
    );
}