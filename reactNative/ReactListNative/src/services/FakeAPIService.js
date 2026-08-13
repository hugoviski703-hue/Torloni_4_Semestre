import axios from "axios";

const apiPort = "3000";
const apiUri = "172.16.2.65";

const localAPi = `http://${apiUri}:${apiPort}`

const externalAPi = null;

const api = axios.create({
    baseURL : localAPi
});

export default api;