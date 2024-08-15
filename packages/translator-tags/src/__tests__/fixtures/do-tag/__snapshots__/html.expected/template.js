import log from "./test-log";
function fromStatic() {
  log.static += "rendered";
}
import { register as _register, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _register(function () {
    log.block += "rendered";
  }, "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0/_", _scope0_id)();
  const fromConst = _register(function () {
    log.const += "rendered";
  }, "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0/__0", _scope0_id);
  fromConst();
  const str = "rendered";
  _register(function () {
    log.let += str;
  }, "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0/__0", _scope0_id)();
  fromStatic();
  const logOutput = JSON.stringify(log);
  _write(`<!>${_escapeXML(logOutput)}${_markResumeNode(_scope0_id, "#text/0")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0");
  _writeScope(_scope0_id, {
    "str": str
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko");