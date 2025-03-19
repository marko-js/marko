export const _template_ = "a<!>c<!>e";
export const _walks_ = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value$await_content2 = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value));
const _params_3$await_content = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _value$await_content2(_scope, _params_3[0]));
const _await_content2 = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params_3$await_content);
const _value$await_content = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value));
const _params_2$await_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _value$await_content(_scope, _params_2[0]));
const _await_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params_2$await_content);
const _await2 = /* @__PURE__ */_$.awaitTag("#text/1", _await_content2);
const _await = /* @__PURE__ */_$.awaitTag("#text/0", _await_content);
export function _setup_(_scope) {
  _await(_scope, resolveAfter("b", 1));
  _await2(_scope, resolveAfter("d", 2));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);