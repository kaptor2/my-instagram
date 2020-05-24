import React from 'react'
import style from './feed.module.css'
import { Posts } from '../Posts/Posts'
import { Users } from '../Users/Users'

export const Feed = (props) => {

    return(
        <div className={`${style.container} ${style.feed}`}>
            <Posts/>
            <Users/>
        </div>
    );
}