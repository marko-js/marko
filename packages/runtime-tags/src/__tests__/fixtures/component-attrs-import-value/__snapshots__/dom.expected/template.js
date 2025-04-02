export const _template = _counter_template;
export const _walks = /* beginChild, _counter_walks, endChild */`/${_counter_walks}&`;
import { formatNumber } from "./helpers";
import { _setup as _counter, _input as _counter_input, _template as _counter_template, _walks as _counter_walks } from "./tags/counter.marko";
export function _setup(_scope) {
  _counter(_scope["#childScope/0"]);
  _counter_input(_scope["#childScope/0"], {
    format: formatNumber
  });
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);