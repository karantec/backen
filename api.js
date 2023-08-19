const axios=require("axios");
const { response } = require("express");

const API_URL="https://jsonplaceholder.typicode.com/users";

axios.get(API_URL).
then(response=>{
    console.log(response.data)
}).catch(error=>{
    console.log(error);
})