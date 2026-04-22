export const $template = /*@__PURE__*/((_w0, _w1) => `<div>${_w0} </div><span>${_w1} </span>`)(_parentEl_template, _parentEl_template);
export const $walks =
/*@__PURE__*/
/* next(1), <parent-el/var>, get, out(1), next(1), <parent-el/var>, get, out(1) */
((_w0, _w1) => `D0${_w0}& lD0${_w1}& l`)(_parentEl_walks, _parentEl_walks);
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _parentEl, $template as _parentEl_template, $walks as _parentEl_walks } from "./tags/parent-el.marko";
const $divName = _._var_resume("__tests__/template.marko_0_divName/var", ($scope, divName) => _._text($scope["#text/2"], divName));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $divName);
  _parentEl($scope["#childScope/0"]);
  _._var($scope, "#childScope/3", $spanName);
  _parentEl($scope["#childScope/3"]);
}
const $spanName = _._var_resume("__tests__/template.marko_0_spanName/var", ($scope, spanName) => _._text($scope["#text/5"], spanName));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);