import testLog from "./test-log";
const staticVar = "static var";
import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  console.log = function (msg) {
    testLog[msg] = true;
  };
  console.log("identifier");
  const tagVar = "tag var";
  console.log(tagVar);
  console.log(staticVar);
  const output = JSON.stringify(testLog);
  _write(`<!>${_escapeXML(output)}${_markResumeNode(_scope0_id, "#text/0")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/log-tag/template.marko_0");
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/log-tag/template.marko");