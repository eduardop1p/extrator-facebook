"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("./services/login"));
const search_1 = __importDefault(require("./services/search"));
const getPeoples_1 = __importDefault(require("./services/getPeoples"));
const path_1 = __importDefault(require("path"));
async function init({ driver, email, filePath, password, searchQuery, }) {
    filePath = path_1.default.join(filePath, 'extrator-facebook-users.txt');
    await driver.get('https://facebook.com/login/');
    await (0, login_1.default)({ driver, email, password });
    await (0, search_1.default)({ driver, searchQuery });
    await (0, getPeoples_1.default)({ driver, filePath });
}
exports.default = init;
// export default async function init() {
//   const driver = await driverInstance();
//   const email = 'elavouradeoliveira@gmail.com';
//   const password = 'senhapass@#%&p1pkkk';
//   const coutn = 'portugal';
//   const filePath = path.join(__dirname, 'extrator-facebook-users.txt');
//   try {
//     await driver.get('https://facebook.com/login/');
//     await login({ driver, email, password });
//     await search({ driver, searchQuery });
//     await getPeoples({ driver, filePath });
//   } catch (err) {
//     console.log(err);
//   } finally {
//     // await driver.quit();
//   }
// }
// init();
