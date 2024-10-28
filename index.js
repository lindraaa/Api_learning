const express = require("express")
const app = express();
const port = 1000;
const axios = require('axios');

// https://swapi.dev/api/people/1
app.get("/people/:id", async (req, res) => {
    const id = req.params.id;
    const response = await axios.get(`https://swapi.dev/api/people/${id}`)
        .then((resp)=>{
            console.log("Success")
            res.send(resp.data)
        })
        .catch (err => console.log("Failed",err))
    // console.log(response)

})


app.listen(port, () => {
    console.log(`Connected to port ${port}`)
})