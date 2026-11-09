import { register, init } from "marko/src/runtime/components/index.js";
import "./components/legacy-parent.marko.register.js";
import "./components/legacy-child.marko.register.js";
import component_0 from "./template.component-browser.js";
register("__tests__/template.marko", component_0);
init();