import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com' 

const options = {
  method:'GET',
  params: {
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '48',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};




export const fetchDataFromApi = async(url)=>{
  try {
    const response = await axios.request(`${BASE_URL}/${url}`,options);
    return response.data
  } catch (error) {
    console.error(error);
  }
}