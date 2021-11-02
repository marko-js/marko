import "./foo";
import { b as c } from "./bar";
import baz from "./components/baz.marko";
import { text as _text, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "";
export const walks = "$";
export const hydrate = _register("OfLpufZD", input => {
  baz();

  _text(c);
});
export default _createRenderFn(template, walks, [], hydrate);