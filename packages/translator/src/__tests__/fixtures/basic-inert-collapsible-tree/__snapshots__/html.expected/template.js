import { nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _comments from "./components/comments.marko";
const _renderer = input => {
  const _scope = _nextScopeId();
  _comments({
    ...input,
    renderBody() {
      const _scope = _nextScopeId();
    }
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);