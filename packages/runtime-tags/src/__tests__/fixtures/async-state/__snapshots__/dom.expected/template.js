export const _template = "<button>inc</button><!><!>";
export const _walks = /* get, over(1), replace, over(1) */" b%bD";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const _value$await_content = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value));
const _params2$await_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => _value$await_content(_scope, _params2[0]));
const _await_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params2$await_content);
const _placeholder_content = _$.registerContent("__tests__/template.marko_2_renderer", "LOADING...");
const _await$try_content = /* @__PURE__ */_$.awaitTag("#text/0", _await_content);
const _clickCount$try_content = /* @__PURE__ */_$.dynamicClosureRead("clickCount", (_scope, clickCount) => _await$try_content(_scope, resolveAfter(clickCount, 1)));
const _try_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", 0, 0, _scope => _clickCount$try_content(_scope));
const _try = /* @__PURE__ */_$.createTry("#text/1", _try_content);
const _clickCount_closure = /* @__PURE__ */_$.dynamicClosure(_clickCount$try_content);
const _clickCount_effect = _$.effect("__tests__/template.marko_0_clickCount", (_scope, {
  clickCount
}) => _$.on(_scope["#button/0"], "click", function () {
  _clickCount(_scope, clickCount + 1), clickCount;
}));
const _clickCount = /* @__PURE__ */_$.state("clickCount/2", _scope => {
  _clickCount_closure(_scope);
  _clickCount_effect(_scope);
});
export function _setup(_scope) {
  _clickCount(_scope, 0);
  _try(_scope, {
    placeholder: _$.attrTag({
      content: _placeholder_content(_scope)
    })
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);