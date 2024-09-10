export const _template_ = `<!>${_child_template}${_child_template}<!><${input.show && "div"}></${input.show && "div"}><!>`;
export const _walks_ = /* beginChild, _child_walks, endChild, beginChild, _child_walks, endChild, replace, over(1), get, over(1) */`D/${_child_walks}&/${_child_walks}&%b bD`;
import child from "./components/child/index.marko";
import { _setup_ as _child, _template_ as _child_template, _walks_ as _child_walks } from "./components/child/index.marko";
import { setTagVar as _setTagVar, conditional as _conditional, registerBoundSignal as _registerBoundSignal, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/2", _scope => _setTagVar(_scope, "#text/2!", _data3));
const _data3 = _registerBoundSignal("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var/template.marko_0_data3", (_scope, data3) => {});
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _dynamicTagName(_scope, input.dynamic), _dynamicTagName);
const _data2 = _registerBoundSignal("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var/template.marko_0_data2", (_scope, data2) => {});
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), _input_);
const _data = _registerBoundSignal("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var/template.marko_0_data1", (_scope, data1) => {});
export function _setup_(_scope) {
  _setTagVar(_scope, "#childScope/0", _data);
  _child(_scope["#childScope/0"]);
  _setTagVar(_scope, "#childScope/1", _data2);
  _child(_scope["#childScope/1"]);
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var/template.marko");