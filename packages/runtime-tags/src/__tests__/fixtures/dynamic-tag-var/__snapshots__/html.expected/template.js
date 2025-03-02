import child from "./tags/child/index.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  const data1 = child({});
  _$.setTagVar(_scope0_id, "#scopeOffset/1", _childScope, "__tests__/template.marko_0_data1/var");
  const _dynamicScope = _$.peekNextScope();
  const data2 = _$.dynamicTagInput(_scope0_id, "#text/2", input.show && child, {}, void 0);
  _$.setTagVar(_scope0_id, "#scopeOffset/3", _dynamicScope, "__tests__/template.marko_0_data2/var");
  const _dynamicScope2 = _$.peekNextScope();
  const data3 = _$.dynamicTagInput(_scope0_id, "#text/4", input.dynamic, {}, void 0);
  _$.setTagVar(_scope0_id, "#scopeOffset/5", _dynamicScope2, "__tests__/template.marko_0_data3/var");
  const _dynamicScope3 = _$.peekNextScope();
  const el1 = _$.dynamicTagInput(_scope0_id, "#text/6", input.show && "div", {}, void 0);
  _$.setTagVar(_scope0_id, "#scopeOffset/7", _dynamicScope3, "__tests__/template.marko_0_el1/var");
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#text/2!": _$.writeExistingScope(_dynamicScope),
    "#text/2(": _$.dynamicTagId(input.show && child),
    "#text/4!": _$.writeExistingScope(_dynamicScope2),
    "#text/4(": _$.dynamicTagId(input.dynamic),
    "#text/6!": _$.writeExistingScope(_dynamicScope3),
    "#text/6(": _$.dynamicTagId(input.show && "div")
  }, "__tests__/template.marko", 0);
});