export const _template_ = "<!><div id=ref>0</div>";
export const _walks_ = /* over(1) */"Db";
import { resolveAfter } from "../../utils/resolve";
import { register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _ = _scope => {
  const {
    promise
  } = _scope;
  return async () => {
    document.getElementById("ref").textContent = await promise;
  };
};
const _promise_effect = _register("packages/translator-tags/src/__tests__/fixtures/effect-serialize-promise/template.marko_0_promise", _scope => {
  const {
    promise
  } = _scope;
  _(_scope)();
});
const _promise = /* @__PURE__ */_value("promise", (_scope, promise) => _queueEffect(_scope, _promise_effect));
export function _setup_(_scope) {
  _promise(_scope, Promise.resolve("hello"));
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/effect-serialize-promise/template.marko");