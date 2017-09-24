import express from "express";
import approutes from "./routes/approutes";
import path from "path";
import appconfig from "./config/app";

let app = express();
const router = express.Router();
for (let path in approutes) { //register all define router
    let handle = approutes[path];
    switch (handle.method.toUpperCase()) {
        case "GET":
            router.get(path, handle.handle);
            break;
        case "POST":
            router.post(path, handle.handle);
            break;
        case "PUT":
            router.put(path, handle.handle);
            break;
        case "DELETE":
            router.delete(path, handle.handle);
            break;
        default:
            break;
    }
}
app.use("/", router); // register router
app.use(appconfig.assetsRoot, express.static(path.join(__dirname, appconfig.assetsDir))); // set web document root
// set global error handle. must keep this at last route
app.use((request, response, next) => {
    response.status(404);
    if (request.accepts("html")) {
        return response.render("errors/404");
    }
    return response.send({ code: 1, msg: "ERROR", data: "404 NOT FOUND" });
});

app.set("views", appconfig.viewsDir); // set view file document root
app.set("view engine", appconfig.viewsEngine); // set template engine

const listenAddr = `${appconfig.host}:${appconfig.port}`;
app.listen(appconfig.port, () => {
    console.log("Webshot Listen: 【" + listenAddr + "】");
});


