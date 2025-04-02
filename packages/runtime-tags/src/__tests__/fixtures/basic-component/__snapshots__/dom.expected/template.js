export const _template = `<div>${_counter_template}</div>`;
export const _walks = /* next(1), beginChild, _counter_walks, endChild, out(1) */`D/${_counter_walks}&l`;
import { _setup as _counter, _template as _counter_template, _walks as _counter_walks } from "./tags/counter.marko";
export function _setup(_scope) {
  _counter(_scope["#childScope/0"]);
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);