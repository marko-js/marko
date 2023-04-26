import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
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
}, "packages/translator/src/__tests__/fixtures/basic-converge-in-if/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);