import Axios from "axios";

export default Axios.create({
  baseURL : "https://api.unsplash.com",
  headers:{
    Authorization : "Client-ID jMqWWqP90E-2_6gMA9OQsrssU41k4YfYal7-M5_ME_Y"}
});
