export const _template_ = `${_child_template}source=<!>`;
export const _walks_ = /* beginChild, _child_walks, endChild, over(1), replace, over(1) */`/${_child_walks}&b%b`;
import { _setup_ as _child, _input_ as _child_input, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _source = /* @__PURE__ */_$.state("source", (_scope, source) => {
  _$.data(_scope["#text/1"], source);
  _child_input(_scope["#childScope/0"], {
    value: source,
    valueChange: _valueChange(_scope)
  });
}, () => /* @__PURE__ */_$.inChild("#childScope/0", _child_input));
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _source(_scope, 1);
}
function _valueChange(_scope) {
  return _new_source => {
    _source(_scope, _new_source);
  };
}
_$.register("__tests__/template.marko_0/valueChange", _valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);