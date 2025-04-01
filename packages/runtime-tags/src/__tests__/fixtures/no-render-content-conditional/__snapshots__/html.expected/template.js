import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const output = _$.nodeRef(_scope0_id, "__tests__/template.marko_0/#div");
  _$.write(`<div></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  const _childScope = _$.peekNextScope();
  _child({
    foo: input.foo,
    output: output
  });
  _$.writeScope(_scope0_id, {
    "#childScope/1": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0);
});