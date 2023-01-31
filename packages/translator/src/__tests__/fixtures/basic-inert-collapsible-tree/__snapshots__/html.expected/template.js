import { nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _comments from "./components/comments.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _comments({
    ...input,
    renderBody() {
      const _scope1_id = _nextScopeId();
    }
  });
}, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);