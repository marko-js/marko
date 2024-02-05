import { write as _write, escapeXML as _escapeXML, markResumeNode as _markResumeNode, serializedScope as _serializedScope, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, writeScope as _writeScope, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer(({
  children
}, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  const _forScopeIds = [],
    _scope1_ = new Map();
  const _by = function (c) {
    return c.id;
  };
  let _i2 = 0;
  for (const child of children) {
    const _scope1_id = _nextScopeId();
    let _i = _i2++;
    _forScopeIds.push(_scope1_id);
    _write(`${_escapeXML(child.text)}${_markResumeNode(_scope1_id, "#text/0")}`);
    _writeScope(_scope1_id, (_s => (_scope1_.set(_by(child, _i), _s), _s))({
      "_": _serializedScope(_scope0_id)
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#div/0", _forScopeIds)}</div>${_markResumeNode(_scope0_id, "#div/0")}`);
  _writeScope(_scope0_id, {
    "#div/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/remove-and-add-rows/template.marko");