import child from "./tags/child/index.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  const data1 = child({});
  _$.setTagVar(_scope0_id, _childScope, "__tests__/template.marko_0_data1/var");
  const _dynamicScope = _$.peekNextScope();
  _$.setTagVar(_scope0_id, _dynamicScope, "__tests__/template.marko_0_data2/var");
  const data2 = _$.dynamicTagInput(_scope0_id, "#text/1", input.show && child, {}, void 0);
  const _dynamicScope2 = _$.peekNextScope();
  _$.setTagVar(_scope0_id, _dynamicScope2, "__tests__/template.marko_0_data3/var");
  const data3 = _$.dynamicTagInput(_scope0_id, "#text/2", input.dynamic, {}, void 0);
  const _dynamicScope3 = _$.peekNextScope();
  _$.setTagVar(_scope0_id, _dynamicScope3, "__tests__/template.marko_0_el1/var");
  const el1 = _$.dynamicTagInput(_scope0_id, "#text/3", input.show && "div", {}, void 0);
  _$.debug(_$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#text/1!": _$.writeExistingScope(_dynamicScope),
    "#text/1(": _$.normalizeDynamicRenderer(input.show && child),
    "#text/2!": _$.writeExistingScope(_dynamicScope2),
    "#text/2(": _$.normalizeDynamicRenderer(input.dynamic),
    "#text/3!": _$.writeExistingScope(_dynamicScope3),
    "#text/3(": _$.normalizeDynamicRenderer(input.show && "div")
  }), "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);