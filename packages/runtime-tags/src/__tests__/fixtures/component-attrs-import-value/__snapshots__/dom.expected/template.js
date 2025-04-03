export const $template = _counter_template;
export const $walks = /* beginChild, _counter_walks, endChild */`/${_counter_walks}&`;
import { formatNumber } from "./helpers";
import { $setup as _counter, $input as _counter_input, $template as _counter_template, $walks as _counter_walks } from "./tags/counter.marko";
export function $setup($scope) {
  _counter($scope["#childScope/0"]);
  _counter_input($scope["#childScope/0"], {
    format: formatNumber
  });
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);