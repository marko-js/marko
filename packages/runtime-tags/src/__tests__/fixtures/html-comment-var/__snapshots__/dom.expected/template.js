export const $template = `<div>${_parentEl_template} </div><span>${_parentEl_template} </span>`;
export const $walks = /* next(1), beginChildWithVar, _parentEl_walks, endChild, get, out(1), next(1), beginChildWithVar, _parentEl_walks, endChild, get, out(1) */`D0${_parentEl_walks}& lD0${_parentEl_walks}& l`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _parentEl, $template as _parentEl_template, $walks as _parentEl_walks } from "./tags/parent-el.marko";
const $divName = _._var_resume("__tests__/template.marko_0_divName/var", /* @__PURE__ */_._const("divName", $scope => _._text($scope["#text/2"], $scope.divName)));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $divName);
  _parentEl($scope["#childScope/0"]);
  _._var($scope, "#childScope/3", $spanName);
  _parentEl($scope["#childScope/3"]);
}
const $spanName = _._var_resume("__tests__/template.marko_0_spanName/var", /* @__PURE__ */_._const("spanName", $scope => _._text($scope["#text/5"], $scope.spanName)));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);