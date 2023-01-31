import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const id = 0;
  const items = [];
  _write("<div>");
  for (const item of items) {
    const _scope1_id = _nextScopeId();
    _write(`${_escapeXML(item)}${_markHydrateNode(_scope1_id, "#text/0")}`);
    _maybeFlush();
  }
  _write(`<button id=add>Add</button>${_markHydrateNode(_scope0_id, "#button/1")}<button id=remove>Remove</button>${_markHydrateNode(_scope0_id, "#button/2")}</div>`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_items");
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_id_items");
  _writeHydrateScope(_scope0_id, {
    "id": id,
    "items": items
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);