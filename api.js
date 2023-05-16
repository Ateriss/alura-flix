import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export async function fetchVideos(setData){
    try{
        const response = await axios.get(`${apiUrl}/api/videos`);
        setData(response.data);
    }
    catch(error){
        console.error(error);
    }
}

export async function fetchCat(setData){
    try{
        const response = await axios.get(`${apiUrl}/api/categories`);
        setData(response.data);

    }
    catch(error){
        console.error(error);
    }
}     

