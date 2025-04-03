export const $template = `<div>${_counter_template}</div>`;
export const $walks = /* next(1), beginChild, _counter_walks, endChild, out(1) */`D/${_counter_walks}&l`;
import { $setup as _counter, $template as _counter_template, $walks as _counter_walks } from "./tags/counter.marko";
export function $setup($scope) {
  _counter($scope["#childScope/0"]);
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);