import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, maybeFlush as _maybeFlush, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const arrA = [1, 2, 3];
  _write("<div>");
  let _forScopeIds = [];
  const _scope1_ = [];
  for (const val of arrA) {
    const _scope1_id = _nextScopeId();
    _write(`<div>${_escapeXML(val)}${_markHydrateNode(_scope1_id, "#text/0")}</div>`);
    _writeHydrateScope(_scope1_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope1_);
    _maybeFlush();
    _forScopeIds.push(_scope1_id);
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#div/0", _forScopeIds)}</div>${_markHydrateNode(_scope0_id, "#div/0")}<div>`);
  let _forScopeIds2 = [];
  const _scope2_ = [];
  for (const val of arrA) {
    const _scope2_id = _nextScopeId();
    _write(`<div>${_escapeXML(val)}${_markHydrateNode(_scope2_id, "#text/0")}</div>`);
    _writeHydrateScope(_scope2_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope2_);
    _maybeFlush();
    _forScopeIds2.push(_scope2_id);
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/1", _forScopeIds2)}<div></div></div>`);
}, "packages/translator/src/__tests__/fixtures/for-tag-siblings/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);