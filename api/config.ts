import express from "express";
import engine from "@joepie91/express-react-views";
import path from "path";

function Configure(app: express.Application) {
    app.use(express.static(path.join(__dirname, "../", "views")))
    app.set("views", path.join(__dirname, "../", "views"));
    app.set("view engine", "jsx");
    app.engine("jsx", engine.createEngine());
}

export default Configure;