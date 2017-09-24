/**
 * @Author: luowen <bigpao.luo@gmail.com>
 * @Time: 2017/9/24
 * @Description: abstract app controller
 */


export default class AppController {
    success(data, msg = "SUCCESS", code = 0) {
        return {
            code,
            msg,
            data
        }
    }

    notsuccess(code = 1, msg = "ERROR", data) {
        return {
            code,
            msg,
            data
        }
    }
}