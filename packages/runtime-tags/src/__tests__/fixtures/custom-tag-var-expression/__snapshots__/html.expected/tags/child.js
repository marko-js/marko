import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  _$.write("<span>child</span>");
  const _return = x + 3;
  _$.debug(_$.writeScope(_scope0_id, {
    "/": _tagVar
  }), "__tests__/tags/child.marko", 0, {
    "x": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
  return _return;
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _renderer);