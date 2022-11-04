import { init, register } from "../../../dom/index";
import { _hydrate, _ifBody } from "./browser";

register("counter", _hydrate);
register("ifBody", _ifBody);
init();
