import axios from 'axios';

const instance = axios.create({
 baseURL: 'https://employees-eb181-default-rtdb.firebaseio.com/'
})

export default instance;