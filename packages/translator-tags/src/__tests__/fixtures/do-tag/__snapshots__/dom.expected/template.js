export const _template_ = "<!><!>";
export const _walks_ = /* replace, over(1) */"D%b";
_$.register("packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0/fromStatic", fromStatic);
import log from "./test-log";
function fromStatic() {
  log.static += "rendered";
}
import * as _$ from "@marko/runtime-tags/debug/dom";
const _fromConst = _$.register("packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0/fromConst", _scope => function () {
  log.const += "rendered";
});
const _logOutput = /* @__PURE__ */_$.state("logOutput", (_scope, logOutput) => _$.data(_scope["#text/0"], logOutput));
const _str = /* @__PURE__ */_$.state("str", (_scope, str) => log.let += str);
const _fromConst2 = /* @__PURE__ */_$.value("fromConst", (_scope, fromConst) => fromConst(_scope));
const _setup__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0", _scope => _logOutput(_scope, JSON.stringify(log)));
export function _setup_(_scope) {
  log.block += "rendered";
  fromStatic(_scope);
  _setup__effect(_scope);
  _fromConst2(_scope, _fromConst(_scope));
  _str(_scope, "rendered");
  _logOutput(_scope, JSON.stringify(log));
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko");