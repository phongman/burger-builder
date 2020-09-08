import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-d4b65.firebaseio.com/'
})

export default instance;