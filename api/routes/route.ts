import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
    res.sendFile("index.html")
})

export default route;