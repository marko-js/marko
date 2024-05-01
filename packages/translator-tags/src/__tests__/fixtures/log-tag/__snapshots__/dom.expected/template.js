import testLog from "./test-log";
const staticVar = "static var";
import { queueSource as _queueSource, data as _data, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _output = /* @__PURE__ */_value("output", (_scope, output) => _data(_scope["#text/0"], output));
const _tagVar = /* @__PURE__ */_value("tagVar", (_scope, tagVar) => console.log(tagVar));
const _setup_effect = _register("packages/translator-tags/src/__tests__/fixtures/log-tag/template.marko_0", _scope => _queueSource(_scope, _output, JSON.stringify(testLog)));
const _setup = _scope => {
  console.log("identifier");
  console.log(staticVar);
  _queueEffect(_scope, _setup_effect);
  _tagVar(_scope, "tag var");
  _output(_scope, JSON.stringify(testLog));
};
export const _template_ = "<!><!>";
export const _walks_ = /* replace, over(1) */"D%b";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/log-tag/template.marko");