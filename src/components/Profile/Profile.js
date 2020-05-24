import React, { Component } from 'react';
import style from './profile.module.css'
import { InstaService } from '../../services/InstaService.js'
import { Palette } from '../Palette/Palette.js'
import { User } from '../User/User.js'

export class Profile extends Component {
    InstaService = new InstaService();

    state = {
        error : false,
        photos : []
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos(){
        this.InstaService.getAllPosts()
            .then(this.onUpdate)
            .catch(this.onError)
    }

    onUpdate = (photos) => {
        this.setState({
            error : false,
            photos
        });
    }

    onError = () => {
        this.setState({
            error : true
        });
    }

    renderPalette = (photos) => photos.map(e => {
        return <Palette src={e.src}/>
    });

    render(){
        const {error, photos} = this.state

        if(error) return (<div>Ошибка сервера</div>)

        const items = this.renderPalette(photos);

        return(
            <div className={`${style.container} ${style.profile}`}>
                <User 
                    src='https://www.gl5.ru/photos/z/zeinalov-elman/1.jpg'
                    name='John'/>
                <div className={style.palette}>
                    { items }
                </div>
            </div>
        );
    }
}