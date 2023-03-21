import axios from "axios";

const BASE_URL = "https://infocbackend-production.up.railway.app/teacher";
const JWT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlYWNoZXIxIiwicGFzc3dvcmQiOiJwYXNzdGVhY2hlcjEiLCJpYXQiOjE2NzkwNDEyNTksImV4cCI6MTY3OTMwMDQ1OX0.gNWhcURT2WFHBJnmPTgNDm2xYMvqFyKVZzUYtURF4C4";

const Api = async () => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Credentials": "true",
      Authorization: "Bearer " + JWT,
    },
  };
  try{
    const response = await axios.get(BASE_URL, config);
    console.log(response.data);
  }catch(err){
    console.log(err);
  }

};

export default Api;
