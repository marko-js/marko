import child from "./tags/child/index.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  const data1 = child({});
  _$.setTagVar(_scope0_id, "#scopeOffset/1", _childScope, "__tests__/template.marko_0_data1/var");
  const _dynamicScope = _$.peekNextScope();
  const data2 = _$.dynamicTag(_scope0_id, "#text/2", input.show && child, {}, 0, 0, 1);
  _$.setTagVar(_scope0_id, "#scopeOffset/3", _dynamicScope, "__tests__/template.marko_0_data2/var");
  const _dynamicScope2 = _$.peekNextScope();
  const data3 = _$.dynamicTag(_scope0_id, "#text/4", input.dynamic, {}, 0, 0, 1);
  _$.setTagVar(_scope0_id, "#scopeOffset/5", _dynamicScope2, "__tests__/template.marko_0_data3/var");
  const _dynamicScope3 = _$.peekNextScope();
  const el1 = _$.dynamicTag(_scope0_id, "#text/6", input.show && "div", {}, 0, 0, 1);
  _$.setTagVar(_scope0_id, "#scopeOffset/7", _dynamicScope3, "__tests__/template.marko_0_el1/var");
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0);
});