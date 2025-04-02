export const _template = `${_child_template}${_child_template}`;
export const _walks = /* beginChild, _child_walks, endChild, beginChild, _child_walks, endChild */`/${_child_walks}&/${_child_walks}&`;
import { _setup as _child, _input_value as _child_input_value, _template as _child_template, _walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x = /* @__PURE__ */_$.state("x/2", (_scope, x) => _child_input_value(_scope["#childScope/1"], x));
export function _setup(_scope) {
  _child(_scope["#childScope/0"]);
  _child(_scope["#childScope/1"]);
  _x(_scope, "y");
  _child_input_value(_scope["#childScope/0"], 3);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);