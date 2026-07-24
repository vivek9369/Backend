const express = require("express");
const app = express();
const port  = 8000;
const cors = require("cors");
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json())

app.get("/",(req,res) => {
    res.json({name:"vivek", Branch:"CSE AI&ML",age:21})
});
 
app.post("/",(req,res) => {
    console.log(req.body);
    res.send({success:true})
});

app.listen(port,() => {
    console.log("Listing on port, 8000")
});