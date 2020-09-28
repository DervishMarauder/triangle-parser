import Config from '../Config';
import axios from "axios";

export default axios.create({
  baseURL: Config.api,
  headers: {
    "Content-type": "application/json"
  }
});