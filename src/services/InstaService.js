export class InstaService {

    _apiBase = 'http://localhost:3000';
    _apiBase1 = 'https://raw.githubusercontent.com/kaptor2/my-instagram/master/src/All.json';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`); 
        const res1 = await fetch(`${this._apiBase1}`); 
        console.log(res1.json())
        //console.log(res.json())
        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }
        return await res.json();
    } 

    getAllPosts = async () => {
        return await this.getResource('/posts/');
    }

    getAllPhotos = async () => {
        let res = await this.getResource('/posts/');
        return res.map(this._postTransform);

    }

    _postTransform = (post) => {
        return {src : post.src}
    }
}