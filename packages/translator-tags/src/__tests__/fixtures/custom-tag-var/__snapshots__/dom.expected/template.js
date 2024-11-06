export const _template_ = `${_child_template}<div> </div>`;
export const _walks_ = /* beginChild, _child_walks, endChild, next(1), get, out(1) */`/${_child_walks}&D l`;
import { _setup_ as _child, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _data = _$.registerBoundSignal("packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko_0_data", /* @__PURE__ */_$.value("data", (_scope, data) => _$.data(_scope["#text/1"], data)));
export function _setup_(_scope) {
  _$.setTagVar(_scope, "#childScope/0", _data);
  _child(_scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko");