export const _template_ = _layout_template;
export const _walks_ = /* beginChild, _layout_walks, endChild */`/${_layout_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _layout, _content_ as _layout_input_content, _template_ as _layout_template, _walks_ as _layout_walks } from "./tags/layout.marko";
const _name$layout_content = _$.registerSubscriber("__tests__/template.marko_1_name/subscriber", /* @__PURE__ */_$.dynamicClosure((_scope, name) => _$.data(_scope["#text/0"], name)));
const _setup$layout_content = _scope => {
  _name$layout_content._(_scope, _scope._["name"]);
};
const _layout_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<h1>Hello <!></h1>", /* next(1), over(1), replace */"Db%", _setup$layout_content));
export const _name_ = /* @__PURE__ */_$.value("name", (_scope, name) => _name$layout_content(_scope, name));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _name_(_scope, input.name));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export function _setup_(_scope) {
  _layout(_scope["#childScope/0"]);
  _layout_input_content(_scope["#childScope/0"], _layout_content(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);