export const _template_ = "<!><!>";
export const _walks_ = /* replace, over(1) */"D%b";
_register("packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0/fromStatic", fromStatic);
import log from "./test-log";
function fromStatic() {
  log.static += "rendered";
}
import { register as _register, data as _data, queueSource as _queueSource, value as _value, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _ = _register("packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0/_", _scope => function () {
  log.const += "rendered";
});
const _logOutput = /* @__PURE__ */_value("logOutput", (_scope, logOutput) => _data(_scope["#text/0"], logOutput));
const _str = /* @__PURE__ */_value("str", (_scope, str) => log.let += str);
const _fromConst = /* @__PURE__ */_value("fromConst", (_scope, fromConst) => fromConst(_scope));
const _setup__effect = _register("packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0", _scope => _queueSource(_scope, _logOutput, JSON.stringify(log)));
export function _setup_(_scope) {
  log.block += "rendered";
  fromStatic(_scope);
  _queueEffect(_scope, _setup__effect);
  _fromConst(_scope, _(_scope));
  _str(_scope, "rendered");
  _logOutput(_scope, JSON.stringify(log));
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko");