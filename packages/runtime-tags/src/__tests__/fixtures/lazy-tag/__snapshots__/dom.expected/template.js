export const $template = "<!><!><!><!>";
export const $walks = /* over(1), replace, <Child>, over(1) */"b%/&b";
import * as _ from "@marko/runtime-tags/debug/dom";
let $lazy_Child_tag_input_value = /* @__PURE__ */_._lazy_signal(() => import("./child.marko").then(mod => mod.$input_value));
let $lazy_Child_tag_input_label = /* @__PURE__ */_._lazy_signal(() => import("./child.marko").then(mod => mod.$input_label));
let $lazy_Child_setup = /* @__PURE__ */_._lazy_setup("#text/0", "#childScope/1", () => import("./child.marko").then(mod => [mod.$template, mod.$walks, mod.$setup]));
export function $setup($scope) {
  $lazy_Child_setup($scope);
  $lazy_Child_tag_input_label($scope["#childScope/1"], "x");
}
export const $input_value = ($scope, input_value) => $lazy_Child_tag_input_value($scope["#childScope/1"], input_value);
export const $input = ($scope, input) => $input_value($scope, input.value);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);