export const _template = `<div></div>${_child_template}`;
export const _walks = /* get, over(1), beginChild, _child_walks, endChild */` b/${_child_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _get_output = _$.nodeRef("__tests__/template.marko_0/#div", "Getter:#div/0");
import { _setup as _child, _input as _child_input, _template as _child_template, _walks as _child_walks } from "./tags/child.marko";
export const _input_foo = /* @__PURE__ */_$.value("input_foo", (_scope, input_foo) => _child_input(_scope["#childScope/1"], {
  foo: input_foo,
  output: _get_output(_scope)
}));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_foo(_scope, input.foo));
export function _setup(_scope) {
  _child(_scope["#childScope/1"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);