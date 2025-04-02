export const _template = `${_counter_template}${_counter_template}`;
export const _walks = /* beginChild, _counter_walks, endChild, beginChild, _counter_walks, endChild */`/${_counter_walks}&/${_counter_walks}&`;
const formatNumber = _formatNumber;
const formatNumber2 = _formatNumber2;
import { _setup as _counter, _input as _counter_input, _template as _counter_template, _walks as _counter_walks } from "./tags/counter.marko";
export function _setup(_scope) {
  _counter(_scope["#childScope/0"]);
  _counter(_scope["#childScope/1"]);
  _counter_input(_scope["#childScope/0"], {
    format: formatNumber
  });
  _counter_input(_scope["#childScope/1"], {
    format: formatNumber2
  });
}
import * as _$ from "@marko/runtime-tags/debug/dom";
function _formatNumber(n) {
  return "$" + n.toFixed(2);
}
function _formatNumber2(n) {
  return "$" + n.toFixed(2);
}
_$.register("__tests__/template.marko_0/formatNumber", _formatNumber);
_$.register("__tests__/template.marko_0/formatNumber2", _formatNumber2);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);