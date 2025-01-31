import axios from "axios";
const baseUrl = `http://localhost:3001/allTimeContactCount`;

const countAllTime = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const updateCount = () => {
  const request = axios.put(baseUrl, countAllTime + 1);
  return request.then(response => response.data);
};

export default { 
  countAllTime,
  updateCount
};