export const _template_ = "<button>inc</button><div></div><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const _value$await_content = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value > 1 ? (() => {
  throw new Error("ERROR!");
})() : value));
const _params_3$await_content = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _value$await_content(_scope, _params_3[0]));
const _await_content = /* @__PURE__ */_$.createRenderer("Async: <!>", /* over(1), replace */"b%", 0, _params_3$await_content);
const _err$catch_content = /* @__PURE__ */_$.value("err", (_scope, err) => _$.data(_scope["#text/0"], err));
const _params_2$catch_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _err$catch_content(_scope, _params_2[0]));
const _catch_content = _$.registerContent("__tests__/template.marko_3_renderer", " ", /* get */" ", 0, _params_2$catch_content);
const _placeholder_content = _$.registerContent("__tests__/template.marko_2_renderer", "LOADING...");
const _await$try_content = /* @__PURE__ */_$.awaitTag("#text/0", _await_content);
const _clickCount$try_content_effect = _$.effect("__tests__/template.marko_1_clickCount", (_scope, {
  _: {
    clickCount
  }
}) => (_scope._["#div/1"].textContent = clickCount));
const _clickCount$try_content = /* @__PURE__ */_$.dynamicClosureRead("clickCount", (_scope, clickCount) => {
  _await$try_content(_scope, resolveAfter(clickCount, 1));
  _clickCount$try_content_effect(_scope);
});
const _try_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", 0, 0, _scope => _clickCount$try_content(_scope));
const _try = /* @__PURE__ */_$.createTry("#text/2", _try_content);
const _clickCount_closure = /* @__PURE__ */_$.dynamicClosure(_clickCount$try_content);
const _clickCount_effect = _$.effect("__tests__/template.marko_0_clickCount", (_scope, {
  clickCount
}) => _$.on(_scope["#button/0"], "click", function () {
  _clickCount(_scope, clickCount + 1), clickCount;
}));
const _clickCount = /* @__PURE__ */_$.state("clickCount/3", _scope => {
  _clickCount_closure(_scope);
  _clickCount_effect(_scope);
});
export function _setup_(_scope) {
  _clickCount(_scope, 0);
  _try(_scope, {
    catch: _$.attrTag({
      content: _catch_content(_scope)
    }),
    placeholder: _$.attrTag({
      content: _placeholder_content(_scope)
    })
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);