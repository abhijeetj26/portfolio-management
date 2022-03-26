import axios from "axios";


const doLogin = async (username, password) => {
    const res = await axios.get('staticApi/login.json');
    if (username === res.data.loginData.username && password === res.data.loginData.password) {
        return "login success";
    } else {
        return "username password does not match";
    }
};


export {
    doLogin
};