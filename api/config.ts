import express from "express";
import path from "path";

function Configure(app: express.Application) {
    app.use(express.static(path.join(__dirname, "../", "site")))
}

export default Configure;