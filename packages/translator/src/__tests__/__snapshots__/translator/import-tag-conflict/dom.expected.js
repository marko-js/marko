import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import { data as _data, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "<!> <!>";
export const walks = "%c%b";
export const hydrate = _register("5G72VW1e", input => {
  _data(asset1);

  _data(asset2);
});
export default _createRenderFn(template, walks, [], hydrate);