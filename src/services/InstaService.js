export class InstaService {

    _apiBase = 'http://localhost:3000';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`); 
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