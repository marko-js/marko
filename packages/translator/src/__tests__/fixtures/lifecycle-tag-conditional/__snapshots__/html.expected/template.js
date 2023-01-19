import { nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, markHydrateNode as _markHydrateNode, write as _write, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const x = 0;
  const show = true;
  if (show) {
    const _scope = _nextScopeId();
    _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_x");
    _writeHydrateScope(_scope, {
      3: x
    });
  }
  _write(`<div id=ref></div><button id=increment>Increment</button>${_markHydrateNode(_scope, 1)}<button id=toggle>Toggle</button>${_markHydrateNode(_scope, 2)}`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_show");
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_x");
  _writeHydrateScope(_scope, {
    3: x,
    4: show
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);