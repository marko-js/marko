export const _template = "a<!>c";
export const _walks = /* over(1), replace, over(2) */"b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const _params2$catch_content = /* @__PURE__ */_$.value("_params2");
const _catch_content = _$.registerContent("__tests__/template.marko_2_renderer", "ERROR!", 0, 0, _params2$catch_content);
const _try_content = /* @__PURE__ */_$.createRenderer("b");
const _try = /* @__PURE__ */_$.createTry("#text/0", _try_content);
export function _setup(_scope) {
  _try(_scope, {
    catch: _$.attrTag({
      content: _catch_content(_scope)
    })
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);