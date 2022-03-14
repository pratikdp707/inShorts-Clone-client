import axios from 'axios';

// const URL = 'https://pdp707-inshorts-clone.herokuapp.com/api/news/getNews/';

const BaseURL = 'https://saurav.tech/NewsAPI/top-headlines/category/';

// export const getNews = (category) => {
//     console.log(category);
//     try{
//         return axios.get(`${URL}${category}`)
//     } catch(error){
//         console.log(error);
//     }
// }

export const getNews = (category) => {
    try {
        return axios.get(BaseURL+category+"/in.json");
    } catch (error) {
        
    }
}