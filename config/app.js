/**
 * @Author: luowen <bigpao.luo@gmail.com>
 * @Time: 2017/9/24
 * @Description: application config file location
 */

import DEV from "./app.dev";
import PRODUCTION from "./app.production";
const appconfig = {
    dev: DEV,
    production: PRODUCTION

};
let env = process.env.NODE_ENV || "dev";
export default appconfig[env];


