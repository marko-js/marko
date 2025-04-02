export const _template = "<!><!><!>";
export const _walks = /* replace, over(1) */"D%bD";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
_$.enableCatch();
_$.enableCatch();
_$.enableCatch();
const _value$await_content4 = /* @__PURE__ */_$.value("value", (_scope, value) => _$.classAttr(_scope["#div/0"], value));
const _params5$await_content = /* @__PURE__ */_$.value("_params5", (_scope, _params5) => _value$await_content4(_scope, _params5[0]));
const _await_content4 = /* @__PURE__ */_$.createRenderer("<div level=4></div>", /* get */" ", 0, _params5$await_content);
const _placeholder_content4 = _$.registerContent("__tests__/template.marko_11_renderer", "LOADING B2");
const _placeholder_content3 = _$.registerContent("__tests__/template.marko_10_renderer", "LOADING B1");
const _await$try_content = /* @__PURE__ */_$.awaitTag("#text/0", _await_content4);
const _promiseB$try_content = /* @__PURE__ */_$.dynamicClosureRead("promiseB", _await$try_content, _scope => _scope._._._);
const _try_content4 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", 0, 0, _scope => _promiseB$try_content(_scope));
const _try$await_content = /* @__PURE__ */_$.createTry("#text/1", _try_content4);
const _value$await_content3 = /* @__PURE__ */_$.value("value", (_scope, value) => _$.classAttr(_scope["#div/0"], value));
const _params4$await_content = /* @__PURE__ */_$.value("_params4", (_scope, _params4) => _value$await_content3(_scope, _params4[0]));
const _setup$await_content2 = _scope => {
  _try$await_content(_scope, {
    placeholder: _$.attrTag({
      content: _placeholder_content4(_scope)
    })
  });
};
const _await_content3 = /* @__PURE__ */_$.createRenderer("<div level=3><!></div>", /* get, next(1), replace */" D%", _setup$await_content2, _params4$await_content);
const _await$try_content2 = /* @__PURE__ */_$.awaitTag("#text/0", _await_content3);
const _promiseB$try_content2 = /* @__PURE__ */_$.dynamicClosureRead("promiseB", _await$try_content2);
const _try_content3 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", 0, 0, _scope => _promiseB$try_content2(_scope));
const _try$await_content2 = /* @__PURE__ */_$.createTry("#text/1", _try_content3);
const _promiseB$await_content = /* @__PURE__ */_$.value("promiseB");
const _value$await_content2 = /* @__PURE__ */_$.value("value", (_scope, value) => _$.classAttr(_scope["#div/0"], value));
const _params3$await_content = /* @__PURE__ */_$.value("_params3", (_scope, _params3) => _value$await_content2(_scope, _params3[0]));
const _setup$await_content = _scope => {
  _promiseB$await_content(_scope, resolveAfter("b", 2));
  _try$await_content2(_scope, {
    placeholder: _$.attrTag({
      content: _placeholder_content3(_scope)
    })
  });
};
const _await_content2 = /* @__PURE__ */_$.createRenderer("<div level=2><!></div>", /* get, next(1), replace */" D%", _setup$await_content, _params3$await_content);
const _placeholder_content2 = _$.registerContent("__tests__/template.marko_5_renderer", "LOADING A2");
const _placeholder_content = _$.registerContent("__tests__/template.marko_4_renderer", "LOADING A1");
const _await$try_content3 = /* @__PURE__ */_$.awaitTag("#text/0", _await_content2);
const _promiseA$try_content = /* @__PURE__ */_$.dynamicClosureRead("promiseA", _await$try_content3, _scope => _scope._._._);
const _try_content2 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", 0, 0, _scope => _promiseA$try_content(_scope));
const _try$await_content3 = /* @__PURE__ */_$.createTry("#text/1", _try_content2);
const _value$await_content = /* @__PURE__ */_$.value("value", (_scope, value) => _$.classAttr(_scope["#div/0"], value));
const _params2$await_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => _value$await_content(_scope, _params2[0]));
const _setup$await_content3 = _scope => {
  _try$await_content3(_scope, {
    placeholder: _$.attrTag({
      content: _placeholder_content2(_scope)
    })
  });
};
const _await_content = /* @__PURE__ */_$.createRenderer("<div level=1><!></div>", /* get, next(1), replace */" D%", _setup$await_content3, _params2$await_content);
const _await$try_content4 = /* @__PURE__ */_$.awaitTag("#text/0", _await_content);
const _promiseA$try_content2 = /* @__PURE__ */_$.dynamicClosureRead("promiseA", _await$try_content4);
const _try_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", 0, 0, _scope => _promiseA$try_content2(_scope));
const _try = /* @__PURE__ */_$.createTry("#text/0", _try_content);
const _promiseA = /* @__PURE__ */_$.value("promiseA");
export function _setup(_scope) {
  _promiseA(_scope, resolveAfter("a", 1));
  _try(_scope, {
    placeholder: _$.attrTag({
      content: _placeholder_content(_scope)
    })
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);