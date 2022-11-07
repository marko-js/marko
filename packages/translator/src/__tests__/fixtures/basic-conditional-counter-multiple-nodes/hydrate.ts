import { init, register } from "@marko/runtime-fluurt/src/dom";
import { _hydrate, _ifBody } from "./browser";

register("counter", _hydrate);
register("ifBody", _ifBody);
init();
