export const $template = _wrapOuter_template;
export const $walks = /* <wrap-outer> */`/${_wrapOuter_walks}&`;
import { $setup as _wrapOuter, $rest_class as _wrapOuter_input_class, $template as _wrapOuter_template, $walks as _wrapOuter_walks } from "./tags/wrap-outer.marko";
export function $setup($scope) {
  _wrapOuter($scope["#childScope/0"]);
  _wrapOuter_input_class($scope["#childScope/0"], "foo");
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);