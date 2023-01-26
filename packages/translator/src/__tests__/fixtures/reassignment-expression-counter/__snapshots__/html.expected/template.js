import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const count = 0;
  _write(`<button id=addTwo>${_escapeXML(count)}${_markHydrateNode(_scope0_, "#text/1")}</button>${_markHydrateNode(_scope0_, "#button/0")}<button id=triple>${_escapeXML(count)}${_markHydrateNode(_scope0_, "#text/3")}</button>${_markHydrateNode(_scope0_, "#button/2")}<button id=cube>${_escapeXML(count)}${_markHydrateNode(_scope0_, "#text/5")}</button>${_markHydrateNode(_scope0_, "#button/4")}`);
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/reassignment-expression-counter/template.marko_0_count");
  _writeHydrateScope(_scope0_, {
    "count": count
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);