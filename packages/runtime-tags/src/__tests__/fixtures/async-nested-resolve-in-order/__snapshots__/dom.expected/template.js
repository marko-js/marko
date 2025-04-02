export const _template = "a<!>g<!>m";
export const _walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _result6$await_content = /* @__PURE__ */_$.value("result6", (_scope, result6) => _$.data(_scope["#text/0"], result6));
const _params7$await_content = /* @__PURE__ */_$.value("_params7", (_scope, _params7) => _result6$await_content(_scope, _params7[0]));
const _await_content6 = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params7$await_content);
const _await$await_content3 = /* @__PURE__ */_$.awaitTag("#text/1", _await_content6);
const _result5$await_content = /* @__PURE__ */_$.value("result5", (_scope, result5) => _$.data(_scope["#text/0"], result5));
const _params6$await_content = /* @__PURE__ */_$.value("_params6", (_scope, _params6) => _result5$await_content(_scope, _params6[0]));
const _setup$await_content3 = _scope => {
  _await$await_content3(_scope, resolveAfter("j", 1));
};
const _await_content5 = /* @__PURE__ */_$.createRenderer("<!><!>k", /* replace, over(1), replace */"%b%", _setup$await_content3, _params6$await_content);
const _await$await_content4 = /* @__PURE__ */_$.awaitTag("#text/1", _await_content5);
const _result4$await_content = /* @__PURE__ */_$.value("result4", (_scope, result4) => _$.data(_scope["#text/0"], result4));
const _params5$await_content = /* @__PURE__ */_$.value("_params5", (_scope, _params5) => _result4$await_content(_scope, _params5[0]));
const _setup$await_content4 = _scope => {
  _await$await_content4(_scope, resolveAfter("i", 1));
};
const _await_content4 = /* @__PURE__ */_$.createRenderer("<!><!>l", /* replace, over(1), replace */"%b%", _setup$await_content4, _params5$await_content);
const _result3$await_content = /* @__PURE__ */_$.value("result3", (_scope, result3) => _$.data(_scope["#text/0"], result3));
const _params4$await_content = /* @__PURE__ */_$.value("_params4", (_scope, _params4) => _result3$await_content(_scope, _params4[0]));
const _await_content3 = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params4$await_content);
const _await$await_content = /* @__PURE__ */_$.awaitTag("#text/1", _await_content3);
const _result2$await_content = /* @__PURE__ */_$.value("result2", (_scope, result2) => _$.data(_scope["#text/0"], result2));
const _params3$await_content = /* @__PURE__ */_$.value("_params3", (_scope, _params3) => _result2$await_content(_scope, _params3[0]));
const _setup$await_content = _scope => {
  _await$await_content(_scope, resolveAfter("d", 1));
};
const _await_content2 = /* @__PURE__ */_$.createRenderer("<!><!>e", /* replace, over(1), replace */"%b%", _setup$await_content, _params3$await_content);
const _await$await_content2 = /* @__PURE__ */_$.awaitTag("#text/1", _await_content2);
const _result1$await_content = /* @__PURE__ */_$.value("result1", (_scope, result1) => _$.data(_scope["#text/0"], result1));
const _params2$await_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => _result1$await_content(_scope, _params2[0]));
const _setup$await_content2 = _scope => {
  _await$await_content2(_scope, resolveAfter("c", 1));
};
const _await_content = /* @__PURE__ */_$.createRenderer("<!><!>f", /* replace, over(1), replace */"%b%", _setup$await_content2, _params2$await_content);
const _await2 = /* @__PURE__ */_$.awaitTag("#text/1", _await_content4);
const _await = /* @__PURE__ */_$.awaitTag("#text/0", _await_content);
export function _setup(_scope) {
  _await(_scope, resolveAfter("b", 1));
  _await2(_scope, resolveAfter("h", 1));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);