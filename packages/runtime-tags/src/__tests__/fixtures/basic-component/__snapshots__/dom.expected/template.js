export const $template = /*@__PURE__*/(_w0 => `<div>${_w0}</div>`)(_counter_template);
export const $walks =
/*@__PURE__*/
/* next(1), <counter>, out(1) */
(_w0 => `D/${_w0}&l`)(_counter_walks);
import { $setup as _counter, $template as _counter_template, $walks as _counter_walks } from "./tags/counter.marko";
export function $setup($scope) {
  _counter($scope["#childScope/0"]);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);