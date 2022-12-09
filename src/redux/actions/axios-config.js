import axios from "axios";

const config = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL
});
config.defaults.headers.post["Content-Type"] = "application/json";

export default config;
