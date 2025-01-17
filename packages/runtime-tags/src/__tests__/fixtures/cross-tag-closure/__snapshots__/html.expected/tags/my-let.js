import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const value = input.value;
  const _return = value;
  _$.writeScope(_scope0_id, {
    "/": _tagVar,
    "@": _$.register(_new_value => {
      value = _new_value;
    }, "__tests__/tags/my-let.marko_0/valueChange", _scope0_id)
  });
  _$.markResumeCleanup(_scope0_id);
  return _return;
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-let.marko", _renderer);