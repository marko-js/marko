export const _template_ = _counter_template;
export const _walks_ = /* beginChild, _counter_walks, endChild */`/${_counter_walks}&`;
import { formatNumber } from "./helpers";
import { _setup_ as _counter, _input_ as _counter_input, _template_ as _counter_template, _walks_ as _counter_walks } from "./tags/counter.marko";
export function _setup_(_scope) {
  _counter(_scope["#childScope/0"]);
  _counter_input(_scope["#childScope/0"], {
    format: formatNumber
  });
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);