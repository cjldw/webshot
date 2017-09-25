/**
 * @Author: luowen <bigpao.luo@gmail.com>
 * @Time: 2017/9/24
 * @Description: webshot service
 */
import path from "path";
import screenshot from "webshot2";

const SCREENSHOT_PATH = path.join(path.dirname(__dirname), "public/images/screenshots/");

export default class WebshotService {
    /**
     * do screen shot action
     *
     * @param url
     * @param filename
     * @param width
     * @param height
     * @param savepath
     */
    static screenshot(url, filename, width, height, mobile = false, delay = 0, savepath = "") {
        width = isNaN(width) ? "all" : width;
        height = isNaN(height) ? "all" : height;
        delay = isNaN(delay) ? delay * 1000 : 0;
        let options = {
            "shotSize": {
                width: width,
                height: height
            },
           "renderDelay": delay, // after load three minute take screenshot.
        };

        if (mobile) {
            options.userAgent = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
            + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
        }
        return new Promise((resolve, reject) => {
            screenshot(url, SCREENSHOT_PATH + filename, options, (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve(err);
            })
        });
    }

    /**
     * get screenshot save path
     *
     * @returns {string}
     */
    static screenshotPath() {
        return SCREENSHOT_PATH;
    }
}
