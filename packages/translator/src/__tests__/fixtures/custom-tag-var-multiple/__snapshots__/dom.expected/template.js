import { setup as _child, template as _child_template, walks as _child_walks } from "./components/child.marko";
import { setTagVar as _setTagVar, data as _data2, source as _source, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _data = _register("packages/translator/src/__tests__/fixtures/custom-tag-var-multiple/template.marko_0_data", /* @__PURE__ */_source(1, [], (_scope, data) => {
  _data2(_scope[0], data);
}));
const _setup = _scope => {
  _setTagVar(_scope, 2, _data);
  _child(_scope[2]);
};
export const template = `${_child_template}<div> </div>`;
export const walks = /* beginChild(2), _child_walks, endChild, next(1), get, out(1) */`1${_child_walks}&D l`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);