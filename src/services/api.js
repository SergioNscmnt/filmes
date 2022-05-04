import axios from "axios";

// URL DA API:  https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=4001be6c9603f2db61e2220abea65b16&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
