import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import { text as _text, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = " ";
export const walks = "#]#";
export const hydrate = _register("5G72VW1e", input => {
  _text(asset1);

  _text(asset2);
});
export default _createRenderFn(template, walks, [], hydrate);