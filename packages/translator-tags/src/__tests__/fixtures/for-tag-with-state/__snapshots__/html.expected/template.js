import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, forOf as _forOf, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, writeScope as _writeScope, getScopeById as _getScopeById, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const arrA = [1, 2, 3];
  _forOf(arrA, (val, i) => {
    const _scope1_id = _nextScopeId();
    _write(`<div>${_escapeXML(i)}${_markResumeNode(_scope1_id, "#text/0")}: <!>${_escapeXML(val)}${_markResumeNode(_scope1_id, "#text/1")}</div>`);
  });
  const arrB = [1, 2, 3];
  const _forScopeIds = [],
    _scope2_ = new Map();
  _forOf(arrB, (val, i) => {
    const _scope2_id = _nextScopeId();
    _forScopeIds.push(_scope2_id);
    _write(`<div>${_escapeXML(i)}${_markResumeNode(_scope2_id, "#text/0")}: <!>${_escapeXML(val)}${_markResumeNode(_scope2_id, "#text/1")}</div>`);
    _writeScope(_scope2_id, {});
    _scope2_.set(i, _getScopeById(_scope2_id));
  });
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/1", _forScopeIds)}`);
  _writeScope(_scope0_id, {
    "#text/1(": _scope2_.size ? _scope2_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/for-tag-with-state/template.marko");