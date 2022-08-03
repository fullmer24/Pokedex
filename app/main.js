import { ActiveController } from "./Controllers/ActiveController.js";
import { CaughtController } from "./Controllers/CaughtsController.js";
import { WildsController } from "./Controllers/WildsController.js";


class App {
  wildsController = new WildsController();
  activeController = new ActiveController();
  caughtController = new CaughtController();

}

window["app"] = new App();
