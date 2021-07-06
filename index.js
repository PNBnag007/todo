const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// var router = express.Router();
const todos = require("./routes/todos");
app.use('/todos',todos);

// app.get('/',(req,res)=>{
//     res.send("Hello world");
// });

app.listen(5000,()=>{
    console.log("Listening to port 5000");
});
