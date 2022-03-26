import axios from "axios";

const baseUrl = process.env.REACT_APP_API_ENDPOINT;

const getSummaryList = async () => {
    const api = baseUrl + "/summary";
    const res = await axios.get(api);
    return res.data;
};

export {
    getSummaryList
};