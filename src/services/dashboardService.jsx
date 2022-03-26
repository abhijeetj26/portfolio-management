import axios from "axios";

const BASEURL = "https://623e84d1e8fbc4f1626fddd0.mockapi.io/";

const getSummaryList = async () => {
    const api = BASEURL + "summary";
    const res = await axios.get(api);
    return res.data;
};

export {
    getSummaryList
};