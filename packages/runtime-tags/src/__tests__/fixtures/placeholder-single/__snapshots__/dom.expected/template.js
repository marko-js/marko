export const _template = "a<!>e<!>g";
export const _walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const _data$await_content2 = /* @__PURE__ */_$.value("data", (_scope, data) => _$.data(_scope["#text/0"], data));
const _params3$await_content = /* @__PURE__ */_$.value("_params3", (_scope, _params3) => _data$await_content2(_scope, _params3[0]));
const _await_content2 = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params3$await_content);
const _data$await_content = /* @__PURE__ */_$.value("data", (_scope, data) => _$.data(_scope["#text/0"], data));
const _params2$await_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => _data$await_content(_scope, _params2[0]));
const _await_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params2$await_content);
const _placeholder_content = _$.registerContent("__tests__/template.marko_2_renderer", "_A_");
const _await$try_content = /* @__PURE__ */_$.awaitTag("#text/0", _await_content);
const _setup$try_content = _scope => {
  _await$try_content(_scope, resolveAfter("c", 2));
};
const _try_content = /* @__PURE__ */_$.createRenderer("b<!>d", /* over(1), replace */"b%", _setup$try_content);
const _await = /* @__PURE__ */_$.awaitTag("#text/1", _await_content2);
const _try = /* @__PURE__ */_$.createTry("#text/0", _try_content);
export function _setup(_scope) {
  _try(_scope, {
    placeholder: _$.attrTag({
      content: _placeholder_content(_scope)
    })
  });
  _await(_scope, resolveAfter("f", 1));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);