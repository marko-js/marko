export const $template = _wrap_template;
export const $walks = /* <wrap> */`/${_wrap_walks}&`;
import { $setup as _wrap, $input as _wrap_input, $template as _wrap_template, $walks as _wrap_walks } from "./tags/wrap.marko";
export function $setup($scope) {
  _wrap($scope["#childScope/0"]);
  _wrap_input($scope["#childScope/0"], {
    class: "foo"
  });
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);