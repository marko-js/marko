export const _template = `${_counters_template}<div><!> <!></div>`;
export const _walks = /* beginChild, _counters_walks, endChild, next(1), replace, over(2), replace, out(1) */`/${_counters_walks}&D%c%l`;
import { _setup as _counters, _input_count as _counters_input_count, _input_count1Change as _counters_input_count1Change, _input_count2 as _counters_input_count2, _input_count2Change as _counters_input_count2Change, _template as _counters_template, _walks as _counters_walks } from "./tags/2counters.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count2 = /* @__PURE__ */_$.state("count2/4", (_scope, count2) => {
  _$.data(_scope["#text/2"], count2);
  _counters_input_count2(_scope["#childScope/0"], count2);
});
const _count = /* @__PURE__ */_$.state("count1/3", (_scope, count1) => {
  _$.data(_scope["#text/1"], count1);
  _counters_input_count(_scope["#childScope/0"], count1);
});
export function _setup(_scope) {
  _counters(_scope["#childScope/0"]);
  _count(_scope, 0);
  _count2(_scope, 0);
  _counters_input_count1Change(_scope["#childScope/0"], _count1Change(_scope));
  _counters_input_count2Change(_scope["#childScope/0"], _count2Change(_scope));
}
function _count1Change(_scope) {
  return _new_count1 => {
    _count(_scope, _new_count1);
  };
}
function _count2Change(_scope) {
  return _new_count2 => {
    _count2(_scope, _new_count2);
  };
}
_$.register("__tests__/template.marko_0/count1Change", _count1Change);
_$.register("__tests__/template.marko_0/count2Change", _count2Change);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);