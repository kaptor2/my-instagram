import React, { Component } from 'react'
import style from './posts.module.css'
import { Post } from '../Post/Post'
import { InstaService } from '../../services/InstaService.js'

export class Posts extends Component{
    InstaService = new InstaService();

    state = {
        posts : [],
        error : false
    }

    componentDidMount = () => {
        this.updatePost();
    }
    
    updatePost = () => {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error : false
        });
    }

    onError = () => {
        this.setState({
            error : true
        });
    }

    renderItems = (arr) => arr.map( i => {
            return (
                <Post 
                    key = {i.id}
                    src = {i.src} 
                    name = {i.name}
                    descr = {i.descr}
                    alt = {i.alt}
                    photo = {i.photo}
                />
            );
        });
    

    render() {
        const {posts, error} = this.state;

        if (error) return <div>Ошибка сервера</div>

        let items = this.renderItems(posts);
        return(
            <div className={``}>
                {items}
            </div>
        );
    }
}