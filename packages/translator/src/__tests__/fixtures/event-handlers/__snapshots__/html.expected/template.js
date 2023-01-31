import { nextScopeId as _nextScopeId, markHydrateNode as _markHydrateNode, write as _write, writeHydrateCall as _writeHydrateCall, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child/index.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _child({
    class: "hi",
    onClick: () => {
      console.log("hello world");
    },
    renderBody() {
      const _scope1_id = _nextScopeId();
    }
  });
  _write(`<div class=hi></div>${_markHydrateNode(_scope0_id, "#div/1")}`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/event-handlers/template.marko_0");
}, "packages/translator/src/__tests__/fixtures/event-handlers/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);