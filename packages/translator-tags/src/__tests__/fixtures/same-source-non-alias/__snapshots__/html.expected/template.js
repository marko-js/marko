function createWrapper(a) {
  return {
    a
  };
}
import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  const {
    a,
    a: b
  } = createWrapper(count);
  _write(`<button>${_escapeXML(a)}${_markResumeNode(_scope0_id, "#text/1")} <!>${_escapeXML(b)}${_markResumeNode(_scope0_id, "#text/2")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/same-source-non-alias/template.marko_0_count");
  _writeScope(_scope0_id, {
    "count": count
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/same-source-non-alias/template.marko");