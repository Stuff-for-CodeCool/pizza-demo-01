const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const port = 9002;

const router = require(path.resolve(__dirname, "api", "pizzas"));
const router2 = require(path.resolve(__dirname, "api", "allergens"));

const app = express()
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(cors())

    .use("/public", express.static(`${__dirname}/../frontend/public`))
    .get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/index.html"));
    })
    .use("/api/pizzas", router)
    .use("/api/allergens", router2)
    .listen(port, () => console.log(`http://127.0.0.1:${port}`));
