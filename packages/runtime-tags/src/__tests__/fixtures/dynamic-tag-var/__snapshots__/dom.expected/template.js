export const _template_ = `<!>${_child_template}<!><!><!><!>`;
export const _walks_ = /* beginChild, _child_walks, endChild, replace, over(1), replace, over(1), replace, over(1) */`D/${_child_walks}&%b%b%bD`;
import child from "./tags/child/index.marko";
import { _setup_ as _child, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _inputShowDiv_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/3");
const _dynamicTag3 = /* @__PURE__ */_$.dynamicTag("#text/3", _scope => {
  _$.setTagVar(_scope, "#text/3!", _el);
  _inputShowDiv_input(_scope, () => ({}));
}, () => _inputShowDiv_input);
const _inputDynamic_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/2");
const _dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/2", _scope => {
  _$.setTagVar(_scope, "#text/2!", _data3);
  _inputDynamic_input(_scope, () => ({}));
}, () => _inputDynamic_input);
const _inputShowChild_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/1");
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1", _scope => {
  _$.setTagVar(_scope, "#text/1!", _data2);
  _inputShowChild_input(_scope, () => ({}));
}, () => _inputShowChild_input);
const _el = _$.registerBoundSignal("__tests__/template.marko_0_el1/var", (_scope, el1) => {});
const _data3 = _$.registerBoundSignal("__tests__/template.marko_0_data3/var", (_scope, data3) => {});
const _data2 = _$.registerBoundSignal("__tests__/template.marko_0_data2/var", (_scope, data2) => {});
export const _input_dynamic_ = /* @__PURE__ */_$.value("input_dynamic", (_scope, input_dynamic) => _dynamicTag2(_scope, input_dynamic), () => _dynamicTag2);
export const _input_show_ = /* @__PURE__ */_$.value("input_show", (_scope, input_show) => {
  _dynamicTag(_scope, input_show && child);
  _dynamicTag3(_scope, input_show && "div");
}, () => _$.intersections([_dynamicTag, _dynamicTag3]));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_show_(_scope, input.show);
  _input_dynamic_(_scope, input.dynamic);
}, () => _$.intersections([_input_show_, _input_dynamic_]));
const _data = _$.registerBoundSignal("__tests__/template.marko_0_data1/var", (_scope, data1) => {});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _$.setTagVar(_scope, "#childScope/0", _data);
  _child(_scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);