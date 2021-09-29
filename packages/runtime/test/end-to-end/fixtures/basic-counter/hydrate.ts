import { init, register } from "../../../../src/dom/index";
import { hydrate } from "./browser";

register("counter", hydrate);
init();
