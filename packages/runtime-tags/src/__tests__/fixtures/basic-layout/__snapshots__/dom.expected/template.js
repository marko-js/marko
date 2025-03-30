export const _template_ = _layout_template;
export const _walks_ = /* beginChild, _layout_walks, endChild */`/${_layout_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _layout, _content_ as _layout_input_content, _template_ as _layout_template, _walks_ as _layout_walks } from "./tags/layout.marko";
const _name$layout_content = /* @__PURE__ */_$.dynamicClosureRead("name", (_scope, name) => _$.data(_scope["#text/0"], name));
const _layout_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<h1>Hello <!></h1>", /* next(1), over(1), replace */"Db%", 0, 0, _scope => _name$layout_content(_scope));
const _name__closure = /* @__PURE__ */_$.dynamicClosure(_name$layout_content);
export const _name_ = /* @__PURE__ */_$.value("name", _scope => _name__closure(_scope));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _name_(_scope, input.name));
export function _setup_(_scope) {
  _layout(_scope["#childScope/0"]);
  _layout_input_content(_scope["#childScope/0"], _layout_content(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);