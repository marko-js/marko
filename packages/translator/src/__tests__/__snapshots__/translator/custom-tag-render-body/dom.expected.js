import { hydrate as _child, template as _childTemplate, walks as _childWalks } from "./components/child/index.marko";
import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "This is the body content" + _childTemplate;
export const walks = `]${_childWalks}`;
export const hydrate = _register("TZOEsrPr", input => {
  _child({
    name: "World"
  });
});
export default _createRenderFn(template, walks, [], hydrate);