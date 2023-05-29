const API = `https://jsonplaceholder.typicode.com`;

export const controller = async (path, method = "GET", body) => {

    const options = {
        method,
        headers: {
            "content-type": "application/json"
        }
    }

    if (body) {
        options.body = JSON.stringify(body);
    }

    try {
        const request = await fetch(API + path, options)
        const response = await request.json();

        return response;
    } catch (err) {
        console.log(err);
        return [];
    }
}


export const getPosts = () => { return controller('/posts') }
export const deletePost = (id) => { return controller(`/posts/${id}`, 'DELETE') }
export const editPost = (id, body) => { return controller(`/posts/${id}`, 'PATCH', body) }
export const addPost = (body) => { return controller(`/posts`, 'POST', body) }
