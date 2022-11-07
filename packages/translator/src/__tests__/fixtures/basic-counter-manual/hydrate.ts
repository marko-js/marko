import { init, register } from "@marko/runtime-fluurt/src/dom";
import { hydrate } from "./browser";

register("counter", hydrate);
init();
