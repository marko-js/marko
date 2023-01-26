import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const id = 0;
  const items = [];
  _write("<div>");
  for (const item of items) {
    const _scope1_ = _nextScopeId();
    _write(`${_escapeXML(item)}${_markHydrateNode(_scope1_, "#text/0")}`);
    _maybeFlush();
  }
  _write(`<button id=add>Add</button>${_markHydrateNode(_scope0_, "#button/1")}<button id=remove>Remove</button>${_markHydrateNode(_scope0_, "#button/2")}</div>`);
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_items");
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_id_items");
  _writeHydrateScope(_scope0_, {
    "id": id,
    "items": items
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);