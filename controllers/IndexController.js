/**
 * @Author: luowen <bigpao.luo@gmail.com>
 * @Time: 2017/9/24
 * @Description: WebApp Entrance
 */

import AppController from "./AppController";

export default class IndexController extends AppController {
    index(request, response) {
        return response.render("index", {author: "luowen<bigpao.luoo@gmail.com", request: request});
    }

    test(request, response) {
        return response.send({
            "request": request.uri,
            "title": request.url,
            "ok1": request.query,
            "b": request.baseURI,
            'protocol': request.protocol,
            'port': request.app,
            "22": request.hostname
        });
    }
}

