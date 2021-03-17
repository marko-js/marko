import { register, init } from "marko/components";
import "./template.marko.css";
import component_0 from "./components/other/index.marko";
register("packages/translator-default/test/fixtures/sanity-check/components/other/index.marko", component_0);
import component_1 from "./template.marko";
register("packages/translator-default/test/fixtures/sanity-check/template.marko", component_1);
init();