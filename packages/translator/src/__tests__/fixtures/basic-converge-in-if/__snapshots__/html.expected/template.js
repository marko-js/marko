import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const a = 0;
  const b = 0;
  if (true) {
    const _scope1_id = _nextScopeId();
    _write(`${_escapeXML(a + b)}${_markResumeNode(_scope1_id, "#text/0")}`);
    _writeScope(_scope1_id, {
      "a": a,
      "b": b
    });
  }
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/basic-converge-in-if/template.marko");