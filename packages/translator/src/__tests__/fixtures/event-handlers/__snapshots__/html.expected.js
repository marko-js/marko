import { nextScopeId as _nextScopeId, markHydrateNode as _markHydrateNode, write as _write, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child/index.marko";

const _renderer = input => {
  const _scope = _nextScopeId();

  _child({
    class: "hi",
    onclick: () => {
      console.log("hello world");
    },

    renderBody() {
      const _scope = _nextScopeId();
    }

  });

  _write(`${_markHydrateNode(_scope, 0)}<div class=hi></div>`);

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/event-handlers/template.marko_0");

  _writeHydrateScope(_scope, {});
};

export default _renderer;
export const render = _createRenderer(_renderer);