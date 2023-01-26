import { nextScopeId as _nextScopeId, markHydrateNode as _markHydrateNode, write as _write, writeHydrateCall as _writeHydrateCall, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child/index.marko";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  _child({
    class: "hi",
    onClick: () => {
      console.log("hello world");
    },
    renderBody() {
      const _scope1_ = _nextScopeId();
    }
  });
  _write(`<div class=hi></div>${_markHydrateNode(_scope0_, "#div/1")}`);
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/event-handlers/template.marko_0");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);