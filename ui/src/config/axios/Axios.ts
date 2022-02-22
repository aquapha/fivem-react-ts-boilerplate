import axios from "axios";

const Axios = axios.create({
  baseURL: `https://${process.env.REACT_APP_RESOURCE_NAME}/`,
  headers: {'Content-Type': 'application/json'},
})

export default Axios;
