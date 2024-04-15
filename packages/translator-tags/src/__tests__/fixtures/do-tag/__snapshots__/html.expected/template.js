import log from "./test-log";
function fromStatic() {
  log.static += "rendered";
}
import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  log.block += "rendered";
  const fromConst = function () {
    log.const += "rendered";
  };
  fromConst();
  const str = "rendered";
  log.let += str;
  fromStatic();
  const logOutput = JSON.stringify(log);
  _write(`<!>${_escapeXML(logOutput)}${_markResumeNode(_scope0_id, "#text/0")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0");
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko");