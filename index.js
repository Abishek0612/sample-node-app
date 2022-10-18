const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());

const PORT = 1010;


app.get("/get", async (req, res) => {
    res.send("A sample Node project");
});

app.listen(PORT, () => {
    console.log("server started", PORT)
})


//npm init
//npm i express
//npm 