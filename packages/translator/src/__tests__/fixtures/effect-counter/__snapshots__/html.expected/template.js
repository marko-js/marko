import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const clickCount = 0;
  _write(`<div><button id=button>0</button>${_markHydrateNode(_scope, "#button/0")}</div>`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/effect-counter/template.marko_0_clickCount");
  _writeHydrateScope(_scope, {
    "clickCount": clickCount
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);