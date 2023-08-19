const express=require('express');
const axios=require("axios");
const app=express();





app.get("/api/data",async(req,res)=>{
    try{
        const response=await axios.get('https://jsonplaceholder.typicode.com/users')
        
        res.json(response.data);
        
        
    } catch(error){
        console.log(error);
        res.status(500).json({error:'an error occured'});
    }  
});

app.listen(8080,()=>{
    console.log("Server is running")
})