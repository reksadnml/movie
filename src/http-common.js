import axios from "axios";

export default axios.create({
  baseURL: " http://6acef689.ngrok.io",
  headers: {
    "Content-type": "application/json"
  }
});