import axios from "axios";


const getTopMovieList = async () => {
    const res = await axios.get('staticApi/topMovieList.json');
    return res.data;
};


export {
    getTopMovieList
};