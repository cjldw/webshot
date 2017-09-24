/**
 * @Author: luowen <bigpao.luo@gmail.com>
 * @Time: 2017/9/24
 * @Description: webshot service
 */
import path from "path";
import screenshot from "webshot-phantom2";

const SCREENSHOT_PATH = path.join(path.dirname(__dirname), "public/images/screenshots/");

export default class WebshotService {
    static screenshot(url, filename, width, height, savepath = "") {
        let options = {
            "shotSize": {
                width: "all",
                height: "all"
            }
            //"renderDelay": 3000, // after load three minute take screenshot.
        };
        return screenshot(url, SCREENSHOT_PATH + filename, options, (err) => {
            console.log(err)
        })
    }
}