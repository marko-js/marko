import { hydrate as _child, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = `${_child_template}`;
export const walks = `${_child_walks}`;
export const hydrate = _register("packages/translator/src/__tests__/fixtures/custom-tag-render-body/template.marko", input => {
  _child({
    name: "World"
  });
});
export default _createRenderFn(template, walks, [], hydrate);