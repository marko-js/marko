export const _template_ = `<div></div>${_child_template}`;
export const _walks_ = /* get, over(1), beginChild, _child_walks, endChild */` b/${_child_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _get_output = _$.nodeRef("__tests__/template.marko_0/#div", "#div/0>");
import { _setup_ as _child, _input_ as _child_input, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
export const _input_foo_ = /* @__PURE__ */_$.value("input_foo", (_scope, input_foo) => _child_input(_scope["#childScope/1"], {
  foo: input_foo,
  output: _get_output(_scope)
}));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_foo_(_scope, input.foo));
export function _setup_(_scope) {
  _child(_scope["#childScope/1"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);