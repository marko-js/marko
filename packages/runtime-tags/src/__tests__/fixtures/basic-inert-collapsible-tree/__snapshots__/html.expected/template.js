import _comments from "./tags/comments.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  _comments(input);
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);