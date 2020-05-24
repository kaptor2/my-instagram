export class InstaService {

    __apiBase = 'http://localhost:3000';

    getResource = async (url) => {
        const res = await fetch(`${this.__apiBase}${url}`); 
        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }
        return await res.json();
    } 

    getAllPosts = async () => {
        return await this.getResource('/posts/');
    }
}