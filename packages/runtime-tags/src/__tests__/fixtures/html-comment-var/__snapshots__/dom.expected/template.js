export const _template_ = `<div>${_parentEl_template} </div><span>${_parentEl_template} </span>`;
export const _walks_ = /* next(1), beginChildWithVar, _parentEl_walks, endChild, get, out(1), next(1), beginChildWithVar, _parentEl_walks, endChild, get, out(1) */`D0${_parentEl_walks}& lD0${_parentEl_walks}& l`;
import { _setup_ as _parentEl, _template_ as _parentEl_template, _walks_ as _parentEl_walks } from "./tags/parent-el.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _spanName = _$.registerBoundSignal("__tests__/template.marko_0_spanName/var", /* @__PURE__ */_$.value("spanName", (_scope, spanName) => _$.data(_scope["#text/5"], spanName)));
const _divName = _$.registerBoundSignal("__tests__/template.marko_0_divName/var", /* @__PURE__ */_$.value("divName", (_scope, divName) => _$.data(_scope["#text/2"], divName)));
export function _setup_(_scope) {
  _$.setTagVar(_scope, "#childScope/0", _divName);
  _parentEl(_scope["#childScope/0"]);
  _$.setTagVar(_scope, "#childScope/3", _spanName);
  _parentEl(_scope["#childScope/3"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);