import { attr as _attr, write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, maybeFlush as _maybeFlush, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, writeHydrateCall as _writeHydrateCall, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const open = true;
  const list = [1, 2, 3];
  _write(`<ul${_attr("hidden", !open)}>`);
  let _forScopeIds = [];
  const _scope1_ = [];
  for (const x of list) {
    const _scope1_id = _nextScopeId();
    _write(`<li>${_escapeXML(x)}${_markHydrateNode(_scope1_id, "#text/0")}</li>`);
    _writeHydrateScope(_scope1_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope1_);
    _maybeFlush();
    _forScopeIds.push(_scope1_id);
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#ul/0", _forScopeIds)}</ul>${_markHydrateNode(_scope0_id, "#ul/0")}<button id=toggle>Toggle</button>${_markHydrateNode(_scope0_id, "#button/1")}<button id=reverse>Reverse</button>${_markHydrateNode(_scope0_id, "#button/2")}`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list");
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open");
  _writeHydrateScope(_scope0_id, {
    "open": open,
    "list": list
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);