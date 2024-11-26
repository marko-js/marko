export const _template_ = `<div>${_parentEl_template} </div><span>${_parentEl_template} </span>`;
export const _walks_ = /* next(1), beginChild, _parentEl_walks, endChild, get, out(1), next(1), beginChild, _parentEl_walks, endChild, get, out(1) */`D/${_parentEl_walks}& lD/${_parentEl_walks}& l`;
import { _setup_ as _parentEl, _template_ as _parentEl_template, _walks_ as _parentEl_walks } from "./components/parent-el.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _spanName = _$.registerBoundSignal("packages/translator-tags/src/__tests__/fixtures/html-comment-var/template.marko_0_spanName", /* @__PURE__ */_$.value("spanName", (_scope, spanName) => _$.data(_scope["#text/3"], spanName)));
const _divName = _$.registerBoundSignal("packages/translator-tags/src/__tests__/fixtures/html-comment-var/template.marko_0_divName", /* @__PURE__ */_$.value("divName", (_scope, divName) => _$.data(_scope["#text/1"], divName)));
export function _setup_(_scope) {
  _$.setTagVar(_scope, "#childScope/0", _divName);
  _parentEl(_scope["#childScope/0"]);
  _$.setTagVar(_scope, "#childScope/2", _spanName);
  _parentEl(_scope["#childScope/2"]);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/html-comment-var/template.marko", _template_, _walks_, _setup_);