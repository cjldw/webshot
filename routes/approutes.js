/**
 * @Author: luowen <bigpao.luo@gmail.com>
 * @Time: 2017/9/24
 * @Description: Application Routes List
 */

import Index from "../controllers/IndexController";
import Webshot from "../controllers/WebshotController";

export default  {
    "/": {
        method: "GET",
        handle: (new Index).index
    },
    "/webshot": {
        method: "GET",
        handle: (new Webshot()).webShot
    },
    "/htmlshot": {
        method: "POST",
        handle: (new Webshot()).htmlShot
    }
}

