import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const y = 2;
  _$.write("<span>child</span>");
  const _return = x + y;
  _$.writeScope(_scope0_id, {
    "x": x,
    "y": y,
    "/": _tagVar
  });
  _$.markResumeCleanup(_scope0_id);
  return _return;
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _renderer);