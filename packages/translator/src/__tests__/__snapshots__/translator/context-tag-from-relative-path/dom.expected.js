import Other from "./other.marko";
import { write as _write, getInContext as _getInContext, data as _data, createRenderer as _createRenderer, dynamicTag as _dynamicTag, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "";
export const walks = "";
export const hydrate = _register("src/__tests__/fixtures/context-tag-from-relative-path/template.marko", input => {
  _dynamicTag(Other, {}, _createRenderer("<!></span>", "D%l", () => {
    _write("<span>");

    const message = _getInContext("src/__tests__/fixtures/context-tag-from-relative-path/other.marko");

    _data(message);
  }));
});
export default _createRenderFn(template, walks, [], hydrate);