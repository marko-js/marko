import { pushContext as _pushContext, nextScopeId as _nextScopeId, popContext as _popContext, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child.marko";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const x = 123;
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-reactive/template.marko", x);
  _child({
    renderBody() {
      const _scope = _nextScopeId();
    }
  });
  _popContext();
  _write(`<button id=increment>${_escapeXML(x)}${_markHydrateNode(_scope, 2)}</button>${_markHydrateNode(_scope, 1)}`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/context-tag-reactive/template.marko_0_x");
  _writeHydrateScope(_scope, {
    3: x
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);