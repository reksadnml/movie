import axios from "axios";

export default axios.create({
  baseURL: "https://6acef689.ngrok.io",
  headers: {
    "Content-type": "application/json"
  }
});