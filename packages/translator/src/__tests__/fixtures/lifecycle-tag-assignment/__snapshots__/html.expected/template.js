import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const x = 0;
  const prev = false;
  _write(`<div>x=<span>${_markHydrateNode(_scope, 0)}${_escapeXML(x)}</span>, was=${_markHydrateNode(_scope, 1)}${_escapeXML(prev)}</div>${_markHydrateNode(_scope, 2)}<button id=increment>Increment</button>`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x");
  _writeHydrateScope(_scope, {
    3: x
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);