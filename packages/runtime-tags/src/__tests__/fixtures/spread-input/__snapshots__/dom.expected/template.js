export const $template = `<div id=known>${_wrap_template}</div><div id=dynamic><!></div>`;
export const $walks = /* next(1), <wrap>, out(1), next(1), replace, out(1) */`D/${_wrap_walks}&lD%l`;
import wrapTag from "./tags/wrap.marko";
const Wrap = wrapTag;
import { $setup as _wrap, $input_class as _wrap_input_class, $input_value as _wrap_input_value, $template as _wrap_template, $walks as _wrap_walks } from "./tags/wrap.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export function $setup($scope) {
  _wrap($scope["#childScope/0"]);
  _wrap_input_class($scope["#childScope/0"], "foo");
  _wrap_input_value($scope["#childScope/0"]);
  $dynamicTag($scope, Wrap, () => ({
    class: "bar"
  }));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);