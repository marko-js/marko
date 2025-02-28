export const _template_ = `${_child_template}${_child_template}`;
export const _walks_ = /* beginChild, _child_walks, endChild, beginChild, _child_walks, endChild */`/${_child_walks}&/${_child_walks}&`;
import { _setup_ as _child, _input_value_ as _child_input_value, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x = /* @__PURE__ */_$.state("x/2", (_scope, x) => _child_input_value(_scope["#childScope/1"], x));
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _child(_scope["#childScope/1"]);
  _x(_scope, "y");
  _child_input_value(_scope["#childScope/0"], 3);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);