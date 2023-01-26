import { nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _comments from "./components/comments.marko";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  _comments({
    ...input,
    renderBody() {
      const _scope1_ = _nextScopeId();
    }
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);