import axios from "axios";

export default axios.create({
  baseURL: "https://4a7c98bf.ngrok.io",
  headers: {
    "Content-type": "application/json"
  }
});