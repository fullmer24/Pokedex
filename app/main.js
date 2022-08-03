import { ActiveController } from "./Controllers/ActiveController.js";
import { CaughtsController } from "./Controllers/CaughtsController.js";
import { WildsController } from "./Controllers/WildsController.js";


class App {
  wildsController = new WildsController();
  activeController = new ActiveController();
  caughtsController = new CaughtsController();

}

window["app"] = new App();
