import { nextScopeId as _nextScopeId, markHydrateNode as _markHydrateNode, write as _write, writeHydrateCall as _writeHydrateCall, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child/index.marko";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  _child({
    class: "hi",
    onClick: () => {
      console.log("hello world");
    },
    renderBody() {
      const _scope = _nextScopeId();
    }
  });
  _write(`<div class=hi></div>${_markHydrateNode(_scope, 0)}`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/event-handlers/template.marko_0");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);