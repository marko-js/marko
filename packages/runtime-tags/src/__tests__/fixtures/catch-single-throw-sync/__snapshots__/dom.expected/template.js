export const _template_ = "a<!>d";
export const _walks_ = /* over(1), replace, over(2) */"b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const _error_message$catch_content = /* @__PURE__ */_$.value("error_message", (_scope, error_message) => _$.data(_scope["#text/0"], error_message));
const _error$catch_content = /* @__PURE__ */_$.value("error", (_scope, error) => _error_message$catch_content(_scope, error?.message));
const _params_2$catch_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _error$catch_content(_scope, _params_2[0]));
const _catch_content = _$.registerContent("__tests__/template.marko_2_renderer", " ", /* get */" ", 0, _params_2$catch_content);
const _setup$try_content = _scope => {
  _$.data(_scope["#text/0"], (() => {
    throw new Error("ERROR!");
  })());
};
const _try_content = /* @__PURE__ */_$.createRenderer("b<!>", /* over(1), replace */"b%", _setup$try_content);
const _try = /* @__PURE__ */_$.createTry("#text/0", _try_content);
export function _setup_(_scope) {
  _try(_scope, {
    catch: _$.attrTag({
      content: _catch_content(_scope)
    })
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);