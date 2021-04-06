import "./foo";
import { b as c } from "./bar";
import baz from "./components/baz.marko";
import { dynamicTag as _dynamicTag, data as _data, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "<!>";
export const walks = "%b";
export const hydrate = _register("OfLpufZD", input => {
  _dynamicTag(baz, null);

  _data(c);
});
export default _createRenderFn(template, walks, [], hydrate);