export const _template = `${_child_template}source=<!>`;
export const _walks = /* beginChild, _child_walks, endChild, over(1), replace, over(1) */`/${_child_walks}&b%b`;
import { _setup as _child, _input as _child_input, _template as _child_template, _walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _source = /* @__PURE__ */_$.state("source/2", (_scope, source) => {
  _$.data(_scope["#text/1"], source);
  _child_input(_scope["#childScope/0"], {
    value: source,
    valueChange: _valueChange(_scope)
  });
});
export function _setup(_scope) {
  _child(_scope["#childScope/0"]);
  _source(_scope, 1);
}
function _valueChange(_scope) {
  return _new_source => {
    _source(_scope, _new_source);
  };
}
_$.register("__tests__/template.marko_0/valueChange", _valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);