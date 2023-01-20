import { attr as _attr, write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const open = true;
  const list = [1, 2, 3];
  _write(`<ul${_attr("hidden", !open)}>`);
  for (const x of list) {
    const _scope = _nextScopeId();
    _write(`<li>${_escapeXML(x)}${_markHydrateNode(_scope, "#text/0")}</li>`);
    _maybeFlush();
  }
  _write(`</ul>${_markHydrateNode(_scope, "#ul/0")}<button id=toggle>Toggle</button>${_markHydrateNode(_scope, "#button/1")}<button id=reverse>Reverse</button>${_markHydrateNode(_scope, "#button/2")}`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list");
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open");
  _writeHydrateScope(_scope, {
    "open": open,
    "list": list
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);