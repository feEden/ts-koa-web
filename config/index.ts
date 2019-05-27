import * as _ from "lodash";
import { join } from 'path';

let config = {
    "viewDir": join(__dirname, "..", 'views'),
    "staticDir": join(__dirname, "..", 'assets')
};

/** 
* 这里可以配置不同环境 
*/
const localConfig = {
    port: 3000,
}
config = _.extend(config, localConfig);
export default config;