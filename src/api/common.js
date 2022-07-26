import axios from "axios";

const commonAPIClient = axios.create({
  baseURL: "https://localhost:9000/",
  timeout: 3000,
  headers: {
    Accept: "application/json",
  },
});

export default commonAPIClient;