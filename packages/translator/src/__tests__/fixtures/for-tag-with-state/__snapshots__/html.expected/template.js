import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, SYMBOL_OWNER as _SYMBOL_OWNER, write as _write, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, maybeFlush as _maybeFlush, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const arrA = [1, 2, 3];
  const _forScopeIds = [],
    _scope1_ = [];
  let _i = 0;
  for (const val of arrA) {
    let i = _i++;
    const _scope1_id = _nextScopeId();
    _write(`<div>${_escapeXML(i)}${_markHydrateNode(_scope1_id, "#text/0")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope1_id, "#text/1")}</div>`);
    _writeHydrateScope(_scope1_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope1_);
    _maybeFlush();
    _forScopeIds.push(_scope1_id);
  }
  const arrB = [1, 2, 3];
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}`);
  const _forScopeIds2 = [],
    _scope2_ = [];
  let _i2 = 0;
  for (const val of arrB) {
    let i = _i2++;
    const _scope2_id = _nextScopeId();
    _write(`<div>${_escapeXML(i)}${_markHydrateNode(_scope2_id, "#text/0")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope2_id, "#text/1")}</div>`);
    _writeHydrateScope(_scope2_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope2_);
    _maybeFlush();
    _forScopeIds2.push(_scope2_id);
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/1", _forScopeIds2)}`);
}, "packages/translator/src/__tests__/fixtures/for-tag-with-state/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);