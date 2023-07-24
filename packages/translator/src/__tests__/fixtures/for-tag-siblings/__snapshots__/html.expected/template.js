import { write as _write, escapeXML as _escapeXML, markResumeNode as _markResumeNode, SYMBOL_OWNER as _SYMBOL_OWNER, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, nextScopeId as _nextScopeId, writeScope as _writeScope, maybeFlush as _maybeFlush, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const arrA = [1, 2, 3];
  _write("<div>");
  const _forScopeIds = [],
    _scope1_ = new Map();
  let _i2 = 0;
  for (const val of arrA) {
    const _scope1_id = _nextScopeId();
    let _i = _i2++;
    _forScopeIds.push(_scope1_id);
    _write(`<div>${_escapeXML(val)}${_markResumeNode(_scope1_id, "#text/0")}</div>`);
    _writeScope(_scope1_id, (_s => (_scope1_.set(_i, _s), _s))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#div/0", _forScopeIds)}</div>${_markResumeNode(_scope0_id, "#div/0")}<div>`);
  const _forScopeIds2 = [],
    _scope2_ = new Map();
  let _i4 = 0;
  for (const val of arrA) {
    const _scope2_id = _nextScopeId();
    let _i3 = _i4++;
    _forScopeIds2.push(_scope2_id);
    _write(`<div>${_escapeXML(val)}${_markResumeNode(_scope2_id, "#text/0")}</div>`);
    _writeScope(_scope2_id, (_s2 => (_scope2_.set(_i3, _s2), _s2))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/1", _forScopeIds2)}<div></div></div>`);
  _writeScope(_scope0_id, {
    "#div/0(": _scope1_.size ? _scope1_ : undefined,
    "#text/1(": _scope2_.size ? _scope2_ : undefined
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/for-tag-siblings/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);