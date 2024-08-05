import { write as _write, escapeXML as _escapeXML, markResumeNode as _markResumeNode, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, writeScope as _writeScope, nextScopeId as _nextScopeId, getScopeById as _getScopeById, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  const _forScopeIds = [],
    _scope1_ = new Map();
  for (const key in input.children) {
    const _scope1_id = _nextScopeId();
    const text = input.children[key];
    _forScopeIds.push(_scope1_id);
    _write(`<p>${_escapeXML(key)}${_markResumeNode(_scope1_id, "#text/0")}: <!>${_escapeXML(text)}${_markResumeNode(_scope1_id, "#text/1")}</p>`);
    _writeScope(_scope1_id, {});
    _scope1_.set(key, _getScopeById(_scope1_id));
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}`);
  const _forScopeIds2 = [],
    _scope2_ = new Map();
  for (const key in input.children) {
    const _scope2_id = _nextScopeId();
    _forScopeIds2.push(_scope2_id);
    _write(`<p>${_escapeXML(key)}${_markResumeNode(_scope2_id, "#text/0")}</p>`);
    _writeScope(_scope2_id, {});
    _scope2_.set(key, _getScopeById(_scope2_id));
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/1", _forScopeIds2)}</div>`);
  _writeScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined,
    "#text/1(": _scope2_.size ? _scope2_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-in/template.marko");