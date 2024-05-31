import axios from "axios";

const instance = axios.create({
  baseURL: "https://shopper-1-yzv9.onrender.com",
});

export default instance;
