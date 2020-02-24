const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
app.get('/test',(req,res)=>res.json("server up and running"))
app.use(express.static('publlic'))
app.listen(PORT, () => console.log(`Example app listing on port ${PORT}!`))
