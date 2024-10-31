import { write as _write, escapeXML as _escapeXML, markResumeNode as _markResumeNode, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, writeScope as _writeScope, nextScopeId as _nextScopeId, getScopeById as _getScopeById, forOf as _forOf, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    children
  } = input;
  _write("<div>");
  const _by = function (c) {
    return c.id;
  };
  const _forScopeIds = [],
    _scope1_ = new Map();
  _forOf(children, (child, _index) => {
    const _scope1_id = _nextScopeId();
    _forScopeIds.push(_scope1_id);
    _write(`${_escapeXML(child.text)}${_markResumeNode(_scope1_id, "#text/0")}`);
    _writeScope(_scope1_id, {});
    _scope1_.set(_by(child, _index), _getScopeById(_scope1_id));
  });
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#div/0", _forScopeIds)}</div>${_markResumeNode(_scope0_id, "#div/0")}`);
  _writeScope(_scope0_id, {
    "#div/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/move-and-clear-children/template.marko");