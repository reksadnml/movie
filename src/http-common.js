import axios from "axios";

export default axios.create({
  baseURL: "http://605075b1.ngrok.io",
  headers: {
    "Content-type": "application/json"
  }
});