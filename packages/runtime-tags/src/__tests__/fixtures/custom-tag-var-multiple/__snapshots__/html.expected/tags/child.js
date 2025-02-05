import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const y = 2;
  _$.write("<span>child</span>");
  const _return = x + y;
  _$.debug(_$.writeScope(_scope0_id, {
    "x": x,
    "y": y
  }), "__tests__/tags/child.marko", 0, {
    "x": "1:6",
    "y": "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
  return _return;
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _renderer);