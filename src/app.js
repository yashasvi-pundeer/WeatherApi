const express = require("express")
const path = require("path")
const app = express();
const port = process.env.PORT || 3000;

//console.log(path.join(__dirname,"../public"))
const staticPath =path.join(__dirname,"../public")
const templatePath=path.join(__dirname,"../templates/views")
app.use(express.static(staticPath)) 

//handle bars
app.set("view engine","hbs")
app.set("views",templatePath)

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(port,()=>{
    console.log(`listening to port : ${port}`)
})