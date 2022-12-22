import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const x = 1;
  _write(`${_markHydrateNode(_scope, 0)}<button class=inc>${_markHydrateNode(_scope, 1)}${_escapeXML(x)}</button>`);
  const _return = x;
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/custom-tag-var/components/child.marko_0_x");
  _writeHydrateScope(_scope, {
    2: x,
    "/": _tagVar
  });
  return _return;
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);