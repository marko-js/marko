import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const x = 1;
  _write(`<button class=inc>${_escapeXML(x)}${_markHydrateNode(_scope0_, "#text/1")}</button>${_markHydrateNode(_scope0_, "#button/0")}`);
  const _return = x;
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/custom-tag-var/components/child.marko_0_x");
  _writeHydrateScope(_scope0_, {
    "x": x,
    "/": _tagVar
  });
  return _return;
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);