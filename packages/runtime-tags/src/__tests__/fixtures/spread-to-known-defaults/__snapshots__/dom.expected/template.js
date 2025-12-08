export const $template = `<div id=value-missing>${_wrap_template}</div><div id=value-undefined>${_wrap_template}</div><div id=dynamic-value-set><!></div>`;
export const $walks = /* next(1), <wrap>, out(1), next(1), <wrap>, out(1), next(1), replace, out(1) */`D/${_wrap_walks}&lD/${_wrap_walks}&lD%l`;
import wrapTag from "./tags/wrap.marko";
const Wrap = wrapTag;
import { $setup as _wrap, $input as _wrap_input, $template as _wrap_template, $walks as _wrap_walks } from "./tags/wrap.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/2");
export function $setup($scope) {
  _wrap($scope["#childScope/0"]);
  _wrap_input($scope["#childScope/0"], {
    class: "foo"
  });
  _wrap($scope["#childScope/1"]);
  _wrap_input($scope["#childScope/1"], {
    value: undefined
  });
  $dynamicTag($scope, Wrap, () => ({
    class: "bar",
    value: "abcd"
  }));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);