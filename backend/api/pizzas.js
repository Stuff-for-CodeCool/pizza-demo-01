const { readFile } = require("fs/promises");
const path = require("path");

const fileReader = async (url) => {
    try {
        return await readFile(url, "utf-8");
    } catch (error) {
        console.error(`File reading error: ${error.message}`);
    }
};

const pizzaRoutes = require("express")
    .Router()
    .get("/", async (req, res) => {
        let data = await fileReader(
            path.resolve(__dirname + "/data/dataPizza.json")
        );
        data = JSON.parse(data);
        res.send(data.pizzas);
    });

module.exports = pizzaRoutes;
