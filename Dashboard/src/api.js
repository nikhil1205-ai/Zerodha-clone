import axios from "axios";
let prod=true;
const base=prod?"https://zerodha-clone-0xnw.onrender.com":"http://localhost:8080";
console.log("Backend api :- ",base);
export default axios.create({
  baseURL: base,
  withCredentials: true
});
