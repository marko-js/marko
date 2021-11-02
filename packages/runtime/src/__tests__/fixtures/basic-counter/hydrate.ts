import { init, register } from "../../../dom/index";
import { hydrate } from "./browser";

register("counter", hydrate);
init();
