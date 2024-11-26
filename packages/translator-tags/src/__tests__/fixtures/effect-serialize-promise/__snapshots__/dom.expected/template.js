export const _template_ = "<!><div id=ref>0</div>";
export const _walks_ = /* over(1) */"Db";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _effect = _scope => {
  const {
    promise
  } = _scope;
  return async () => {
    document.getElementById("ref").textContent = await promise;
  };
};
const _promise_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/effect-serialize-promise/template.marko_0_promise", _scope => {
  const {
    promise
  } = _scope;
  _effect(_scope)();
});
const _promise = /* @__PURE__ */_$.value("promise", (_scope, promise) => _promise_effect(_scope));
export function _setup_(_scope) {
  _promise(_scope, Promise.resolve("hello"));
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/effect-serialize-promise/template.marko", _template_, _walks_, _setup_);