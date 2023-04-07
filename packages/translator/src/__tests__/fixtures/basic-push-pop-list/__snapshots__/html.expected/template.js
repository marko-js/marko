import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, maybeFlush as _maybeFlush, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, writeHydrateCall as _writeHydrateCall, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const id = 0;
  const items = [];
  _write("<div>");
  const _forScopeIds = [],
    _scope1_ = [];
  for (const item of items) {
    const _scope1_id = _nextScopeId();
    _write(`${_escapeXML(item)}${_markHydrateNode(_scope1_id, "#text/0")}`);
    _writeHydrateScope(_scope1_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope1_);
    _maybeFlush();
    _forScopeIds.push(_scope1_id);
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}<button id=add>Add</button>${_markHydrateNode(_scope0_id, "#button/1")}<button id=remove>Remove</button>${_markHydrateNode(_scope0_id, "#button/2")}</div>`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_items");
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_id_items");
  _writeHydrateScope(_scope0_id, {
    "id": id,
    "items": items
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);