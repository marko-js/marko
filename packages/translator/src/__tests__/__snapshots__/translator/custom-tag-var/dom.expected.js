import { hydrate as _child, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { data as _data, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = `${_child_template}<!>`;
export const walks = `${_child_walks}%b`;
export const hydrate = _register("lz0p3Mr3", input => {
  const data = _child();

  _data(data);
});
export default _createRenderFn(template, walks, [], hydrate);