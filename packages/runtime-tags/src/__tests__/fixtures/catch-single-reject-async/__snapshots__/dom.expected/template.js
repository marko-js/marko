export const _template_ = "a<!>d<!>f";
export const _walks_ = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { rejectAfter, resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const _data$await_content2 = /* @__PURE__ */_$.value("data", (_scope, data) => _$.data(_scope["#text/0"], data));
const _params_4$await_content = /* @__PURE__ */_$.value("_params_4", (_scope, _params_4) => _data$await_content2(_scope, _params_4[0]));
const _await_content2 = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params_4$await_content);
const _data$await_content = /* @__PURE__ */_$.value("data", (_scope, data) => _$.data(_scope["#text/0"], data));
const _params_3$await_content = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _data$await_content(_scope, _params_3[0]));
const _await_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params_3$await_content);
const _error_message$catch_content = /* @__PURE__ */_$.value("error_message", (_scope, error_message) => _$.data(_scope["#text/0"], error_message));
const _error$catch_content = /* @__PURE__ */_$.value("error", (_scope, error) => _error_message$catch_content(_scope, error?.message));
const _params_2$catch_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _error$catch_content(_scope, _params_2[0]));
const _catch_content = _$.registerContent("__tests__/template.marko_2_renderer", " ", /* get */" ", 0, _params_2$catch_content);
const _await$try_content = /* @__PURE__ */_$.awaitTag("#text/0", _await_content);
const _setup$try_content = _scope => {
  _await$try_content(_scope, rejectAfter(new Error("ERROR!"), 2));
};
const _try_content = /* @__PURE__ */_$.createRenderer("b<!>c", /* over(1), replace */"b%", _setup$try_content);
const _await = /* @__PURE__ */_$.awaitTag("#text/1", _await_content2);
const _try = /* @__PURE__ */_$.createTry("#text/0", _try_content);
export function _setup_(_scope) {
  _try(_scope, {
    catch: _$.attrTag({
      content: _catch_content(_scope)
    })
  });
  _await(_scope, resolveAfter("e", 1));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);