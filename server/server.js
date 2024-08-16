const express = require('express')
const app = express()
const port = 8080

app.listen(port,() => console.log('Server starts'))

app.get("/api",(req, res) =>{
    res.json({"plants":["attrone","attrtwo","attrthree"]})
})