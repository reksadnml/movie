import axios from "axios";

export default axios.create({
  baseURL: "http://6fd2b201.ngrok.io",
  headers: {
    "Content-type": "application/json"
  }
});