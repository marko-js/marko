import { pushContext as _pushContext, nextScopeId as _nextScopeId, popContext as _popContext, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child.marko";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-static/template.marko", 123);
  _child({
    renderBody() {
      const _scope = _nextScopeId();
    }
  });
  _popContext();
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);