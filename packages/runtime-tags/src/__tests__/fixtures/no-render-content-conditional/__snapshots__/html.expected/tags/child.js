import _myConst from "./my-const.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  const x = _myConst({
    value: input.foo
  });
  _$.setTagVar(_scope0_id, "#scopeOffset/1", _childScope, "__tests__/tags/child.marko_0_x/var");
  _$.writeEffect(_scope0_id, "__tests__/tags/child.marko_0_input_x");
  _$.writeScope(_scope0_id, {
    input,
    x,
    "#childScope/0": _$.writeExistingScope(_childScope)
  }, "__tests__/tags/child.marko", 0, {
    input: 0,
    x: "1:10"
  });
});