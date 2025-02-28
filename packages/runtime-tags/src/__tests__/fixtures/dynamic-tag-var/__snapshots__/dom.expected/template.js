export const _template_ = `<!>${_child_template}<!><!><!><!>`;
export const _walks_ = /* beginChildWithVar, _child_walks, endChild, dynamicTagWithVar, over(1), dynamicTagWithVar, over(1), dynamicTagWithVar, over(1) */`D0${_child_walks}&1b1b1bD`;
import child from "./tags/child/index.marko";
import { _setup_ as _child, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag3 = /* @__PURE__ */_$.dynamicTag("#text/6", 0, () => _el);
const _dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/4", 0, () => _data3);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2", 0, () => _data2);
const _el = _$.registerBoundSignal("__tests__/template.marko_0_el1/var", (_scope, el1) => {});
const _data3 = _$.registerBoundSignal("__tests__/template.marko_0_data3/var", (_scope, data3) => {});
export const _input_dynamic_ = /* @__PURE__ */_$.value("input_dynamic", (_scope, input_dynamic) => _dynamicTag2(_scope, input_dynamic));
export const _input_show_ = /* @__PURE__ */_$.value("input_show", (_scope, input_show) => {
  _dynamicTag(_scope, input_show && child);
  _dynamicTag3(_scope, input_show && "div");
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_show_(_scope, input.show);
  _input_dynamic_(_scope, input.dynamic);
});
const _data2 = _$.registerBoundSignal("__tests__/template.marko_0_data2/var", (_scope, data2) => {});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
const _data = _$.registerBoundSignal("__tests__/template.marko_0_data1/var", (_scope, data1) => {});
export function _setup_(_scope) {
  _$.setTagVar(_scope, "#childScope/0", _data);
  _child(_scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);