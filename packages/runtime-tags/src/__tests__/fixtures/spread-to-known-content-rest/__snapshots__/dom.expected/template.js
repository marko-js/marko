export const $template = /*@__PURE__*/((_w0, _w1, _w2) => `<div id=content-missing>${_w0}</div><div id=content-undefined>${_w1}</div><div id=content-set>${_w2}</div><div id=dynamic><!></div>`)(_wrap_template, _wrap_template, _wrap_template);
export const $walks =
/*@__PURE__*/
/* next(1), <wrap>, out(1), next(1), <wrap>, out(1), next(1), <wrap>, out(1), next(1), replace, out(1) */
((_w0, _w1, _w2) => `D/${_w0}&lD/${_w1}&lD/${_w2}&lD%l`)(_wrap_walks, _wrap_walks, _wrap_walks);
import wrapTag from "./tags/wrap.marko";
const Wrap = wrapTag;
import { $setup as _wrap, $_class as _wrap_input_class, $rest as _wrap_input_$rest, $template as _wrap_template, $walks as _wrap_walks } from "./tags/wrap.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $Wrap_content = _._content_resume("__tests__/template.marko_2_content", "Hello World", /* over(1) */"b");
const $wrap_content = _._content_resume("__tests__/template.marko_1_content", "Hello World", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/3", $Wrap_content);
export function $setup($scope) {
  _wrap($scope["#childScope/0"]);
  _wrap_input_class($scope["#childScope/0"], "foo");
  _wrap_input_$rest($scope["#childScope/0"], {});
  _wrap($scope["#childScope/1"]);
  _wrap_input_class($scope["#childScope/1"], "foo");
  _wrap_input_$rest($scope["#childScope/1"], {
    content: undefined
  });
  _wrap($scope["#childScope/2"]);
  _wrap_input_class($scope["#childScope/2"], "foo");
  _wrap_input_$rest($scope["#childScope/2"], {
    content: $wrap_content($scope)
  });
  $dynamicTag($scope, Wrap, () => ({
    class: "bar"
  }));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);