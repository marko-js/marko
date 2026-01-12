export const $template = `<div id=content-missing>${_wrap_template}</div><div id=content-undefined>${_wrap_template}</div><div id=content-set>${_wrap_template}</div><div id=dynamic><!></div>`;
export const $walks = /* next(1), <wrap>, out(1), next(1), <wrap>, out(1), next(1), <wrap>, out(1), next(1), replace, out(1) */`D/${_wrap_walks}&lD/${_wrap_walks}&lD/${_wrap_walks}&lD%l`;
import wrapTag from "./tags/wrap.marko";
const Wrap = wrapTag;
import { $setup as _wrap, $_class as _wrap_input_class, $rest_content as _wrap_input_content, $template as _wrap_template, $walks as _wrap_walks } from "./tags/wrap.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $Wrap_content = _._content_resume("__tests__/template.marko_2_content", "Hello World", /* over(1) */"b");
const $wrap_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "Hello World", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/3", $Wrap_content);
export function $setup($scope) {
  _wrap($scope["#childScope/0"]);
  _wrap_input_class($scope["#childScope/0"], "foo");
  _wrap_input_content($scope["#childScope/0"]);
  _wrap($scope["#childScope/1"]);
  _wrap_input_class($scope["#childScope/1"], "foo");
  _wrap_input_content($scope["#childScope/1"], undefined);
  _wrap($scope["#childScope/2"]);
  _wrap_input_content($scope["#childScope/2"], $wrap_content($scope));
  _wrap_input_class($scope["#childScope/2"], "foo");
  $dynamicTag($scope, Wrap, () => ({
    class: "bar"
  }));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);