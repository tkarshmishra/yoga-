const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,"public")))
app.use("/",require(path.join(__dirname,"public/yoga.js")))

app.get("/",(req,res)=>{
  res.sendFile(__dirname,"public/index.html");
})

app.listen(port, () => {
  console.log("running on port " + port);
});
