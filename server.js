import express from "express";
import approutes from "./routes/approutes";
import path from "path";

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
app.use("/static", express.static(path.join(__dirname, "public"))); // set web document root
app.set("views", "./public"); // set view file document root
app.set("view engine", "ejs"); // set template engine
app.listen(8888, () => {
    console.log("Webshot Listen: 8888")
});


