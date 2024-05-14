import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, getScopeById as _getScopeById, maybeFlush as _maybeFlush, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _forScopeIds = [],
    _scope1_ = new Map();
  const _by = function (c) {
    return c.id;
  };
  let _i2 = 0;
  for (const child of input.children) {
    const _scope1_id = _nextScopeId();
    let _i = _i2++;
    _forScopeIds.push(_scope1_id);
    _write(`${_escapeXML(child.text)}${_markResumeNode(_scope1_id, "#text/0")}`);
    _writeScope(_scope1_id, {});
    _scope1_.set(_by(child, _i), _getScopeById(_scope1_id));
    _maybeFlush();
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}`);
  _writeScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/move-and-clear-top-level/template.marko");