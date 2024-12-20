export const _template_ = `<!>${_child_template}${_child_template}<!><${input.show && "div"}></${input.show && "div"}><!>`;
export const _walks_ = /* beginChild, _child_walks, endChild, beginChild, _child_walks, endChild, replace, over(1), get, over(1) */`D/${_child_walks}&/${_child_walks}&%b bD`;
import child from "./tags/child/index.marko";
import { _setup_ as _child, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _inputDynamic_input = _$.dynamicTagAttrs("#text/2");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/2", _scope => {
  _$.setTagVar(_scope, "#text/2!", _data3);
  _inputDynamic_input(_scope, () => ({}));
}, () => _inputDynamic_input);
const _data3 = _$.registerBoundSignal("__tests__/template.marko_0_data3/var", (_scope, data3) => {});
export const _input_dynamic_ = /* @__PURE__ */_$.value("input_dynamic", (_scope, input_dynamic) => _dynamicTagName(_scope, input_dynamic), () => _dynamicTagName);
const _data2 = _$.registerBoundSignal("__tests__/template.marko_0_data2/var", (_scope, data2) => {});
export const _input_show_ = /* @__PURE__ */_$.value("input_show", 0);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_show_(_scope, input.show);
  _input_dynamic_(_scope, input.dynamic);
}, () => _input_dynamic_);
const _data = _$.registerBoundSignal("__tests__/template.marko_0_data1/var", (_scope, data1) => {});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _$.setTagVar(_scope, "#childScope/0", _data);
  _child(_scope["#childScope/0"]);
  _$.setTagVar(_scope, "#childScope/1", _data2);
  _child(_scope["#childScope/1"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, void 0, () => _params__);