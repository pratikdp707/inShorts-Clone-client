import axios from 'axios';

const URL = 'https://nodejs-tasks-all.herokuapp.com/api/news/getNews/';

export const getNews = (category) => {
    console.log(category);
    try{
        return axios.get(`${URL}${category}`)
    } catch(error){
        console.log(error);
    }
}