const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log(res);
    res.send("<h1>hola caracola, server 2</h1>")
});

const kk = app.listen(2323, () => {
    console.log("Listening on port: 2323" );
});