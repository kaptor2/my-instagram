import React from 'react';
import style from './users.module.css'
import { User } from '../User/User'

export const Users = (props) => {

    return(
        <div>
            <User 
                src='https://www.gl5.ru/photos/z/zeinalov-elman/1.jpg'
                name='John'
            />
           <div className={style.users__block}>
            <User 
                    src='https://www.gl5.ru/photos/z/zeinalov-elman/1.jpg'
                    name='John'
                    min
                />
                <User 
                    src='https://www.gl5.ru/photos/z/zeinalov-elman/1.jpg'
                    name='John'
                    min
                />
                <User 
                    src='https://www.gl5.ru/photos/z/zeinalov-elman/1.jpg'
                    name='John'
                    min
                />
                <User 
                    src='https://www.gl5.ru/photos/z/zeinalov-elman/1.jpg'
                    name='John'
                    min
                />
           </div>
        </div>
    );
}