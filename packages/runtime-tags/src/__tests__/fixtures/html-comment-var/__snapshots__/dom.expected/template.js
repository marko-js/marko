export const $template = `<div>${_parentEl_template} </div><span>${_parentEl_template} </span>`;
export const $walks = /* next(1), beginChildWithVar, _parentEl_walks, endChild, get, out(1), next(1), beginChildWithVar, _parentEl_walks, endChild, get, out(1) */`D0${_parentEl_walks}& lD0${_parentEl_walks}& l`;
import { $setup as _parentEl, $template as _parentEl_template, $walks as _parentEl_walks } from "./tags/parent-el.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $divName = _$.registerBoundSignal("__tests__/template.marko_0_divName/var", /* @__PURE__ */_$.value("divName", ($scope, divName) => _$.data($scope["#text/2"], divName)));
export function $setup($scope) {
  _$.setTagVar($scope, "#childScope/0", $divName);
  _parentEl($scope["#childScope/0"]);
  _$.setTagVar($scope, "#childScope/3", $spanName);
  _parentEl($scope["#childScope/3"]);
}
const $spanName = _$.registerBoundSignal("__tests__/template.marko_0_spanName/var", /* @__PURE__ */_$.value("spanName", ($scope, spanName) => _$.data($scope["#text/5"], spanName)));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);