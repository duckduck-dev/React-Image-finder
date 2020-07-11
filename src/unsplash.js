import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID 6R9pWIuYVvbn8mgnEOHuMIb3pcvqodO85vRari6mxfY'
    }
});