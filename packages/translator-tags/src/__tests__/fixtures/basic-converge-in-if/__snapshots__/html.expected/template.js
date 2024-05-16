import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, ensureScopeWithId as _ensureScopeWithId, writeScope as _writeScope, nextScopeId as _nextScopeId, getScopeById as _getScopeById, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const a = 0;
  const b = 0;
  let _ifScopeId;
  if (true) {
    const _scope1_id = _nextScopeId();
    _write(`${_escapeXML(a + b)}${_markResumeNode(_scope1_id, "#text/0")}`);
    _writeScope(_scope1_id, {
      "_": _ensureScopeWithId(_scope0_id)
    });
    _ifScopeId = _scope1_id;
  }
  _writeScope(_scope0_id, {
    "a": a,
    "b": b,
    "#text/0!": _getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-converge-in-if/template.marko");