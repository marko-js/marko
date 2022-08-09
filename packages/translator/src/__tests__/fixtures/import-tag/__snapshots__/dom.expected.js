import "./foo";
import { b as c } from "./bar";
import baz from "./components/baz.marko";
import { dynamicTag as _dynamicTag, data as _data, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _setup = _scope => {
  _data(_scope[0], c);
};

export const template = "<!>";
export const walks =
/* replace, over(1) */
"%b";
export const setup = _setup;
export default _createRenderFn(template, walks, setup);