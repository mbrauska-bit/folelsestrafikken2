const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});

app.set("view engine","ejs");    
app.set("views","./views");

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index");;
})

app.get("/register",(req,res)=>{
    res.render("register");
})

app.get("/login",(req,res)=>{
    res.render("login");
})



app.listen(4000,()=>{
 console.log("Server runnning on http://localhost:4000");
})
