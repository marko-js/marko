export const _template = "Before<!>After";
export const _walks = /* over(1), replace, over(2) */"b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const _err_message$catch_content = /* @__PURE__ */_$.value("err_message", (_scope, err_message) => _$.data(_scope["#text/0"], err_message));
const _err$catch_content = /* @__PURE__ */_$.value("err", (_scope, err) => _err_message$catch_content(_scope, err?.message));
const _params2$catch_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => _err$catch_content(_scope, _params2[0]));
const _catch_content = _$.registerContent("__tests__/template.marko_2_renderer", " ", /* get */" ", 0, _params2$catch_content);
const _setup$try_content = _scope => {
  _$.data(_scope["#text/0"], (() => {
    throw new Error("ERROR!");
  })());
};
const _try_content = /* @__PURE__ */_$.createRenderer("Inside<!>", /* over(1), replace */"b%", _setup$try_content);
const _try = /* @__PURE__ */_$.createTry("#text/0", _try_content);
export function _setup(_scope) {
  _try(_scope, {
    catch: _$.attrTag({
      content: _catch_content(_scope)
    })
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);