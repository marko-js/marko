import * as _$ from "@marko/runtime-tags/debug/html";
import _helloSetter from "./tags/hello-setter.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const el = _$.nodeRef(_scope0_id, "__tests__/template.marko_0/#div");
  _$.write(`<div></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  const _childScope = _$.peekNextScope();
  _helloSetter({
    el: el
  });
  _$.debug(_$.writeScope(_scope0_id, {
    "#childScope/1": _$.writeExistingScope(_childScope)
  }), "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);