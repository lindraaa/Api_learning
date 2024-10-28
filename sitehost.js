const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;


const api_key = 'h523hDtETbkJ3nSJL323hjYLXbCyDaRZ'; 

// client_id/100
app.get("/domains/:client_id", (req, res) => {
    const id = req.params.client_id; 
    axios.get(`https://api.recruitment.shq.nz/domains/${id}`, {
        params:{
            api_key: api_key
        }
    })
    .then(response => {
        res.send(response.data); 
    })
    .catch(error => {
        console.error(error); 
        res.send('Error fetching data'); 
    });
});

app.get("/zones/:zone_id", (req, res) => {
    const id = req.params.zone_id; 
    axios.get(`https://api.recruitment.shq.nz/zones/${id}`, {
        params:{
            api_key: api_key
        }
    })
    .then(response => {
        res.send(response.data); 
    })
    .catch(error => {
        console.error(error); 
        res.send('Error fetching data'); 
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// To run install first the dependencies 
// Run in terminal: "npm install express axios" 
// After Installing run "node "