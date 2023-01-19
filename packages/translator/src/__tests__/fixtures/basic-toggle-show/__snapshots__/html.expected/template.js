import { write as _write, nextScopeId as _nextScopeId, markHydrateNode as _markHydrateNode, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const show = true;
  _write("<div>");
  if (show) {
    const _scope = _nextScopeId();
    _write("Hello!");
  }
  _write(`<button>Toggle</button>${_markHydrateNode(_scope, 1)}</div>`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko_0_show");
  _writeHydrateScope(_scope, {
    2: show
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);