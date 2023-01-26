import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const count = 0;
  _write(`<button id=count>${_escapeXML(count)}${_markHydrateNode(_scope0_, "#text/1")}</button>${_markHydrateNode(_scope0_, "#button/0")}`);
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/dynamic-tag-with-updating-body/components/counter.marko_0_count");
  _writeHydrateScope(_scope0_, {
    "count": count
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);