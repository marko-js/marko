import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _hoisted_setHtml3 = _$.hoist(_scope0_id, "__tests__/template.marko_0__hoisted_setHtml3/hoist");
  _$.resumeSingleNodeForTo(5, 0, 1, () => {
    const _scope1_id = _$.nextScopeId();
    const _dynamicScope = _$.peekNextScope();
    const setHtml = _$.dynamicTagInput(_scope1_id, "#text/0", 1 && Child, {}, void 0);
    _$.setTagVar(_scope1_id, "#scopeOffset/1", _dynamicScope, "__tests__/template.marko_1_setHtml/var");
    _$.writeScope(_scope1_id, {
      "ConditionalScope:#text/0": _$.writeExistingScope(_dynamicScope),
      "ConditionalRenderer:#text/0": _$.dynamicTagId(1 && Child),
      setHtml
    }, "__tests__/template.marko", "3:2");
  }, 0, _scope0_id, "#text/0");
  let to = 3;
  _$.write("<hr>");
  _$.resumeSingleNodeForTo(to, 0, 1, () => {
    const _scope2_id = _$.nextScopeId();
    const _dynamicScope2 = _$.peekNextScope();
    const setHtml2 = _$.dynamicTagInput(_scope2_id, "#text/0", 1 && Child, {}, void 0);
    _$.setTagVar(_scope2_id, "#scopeOffset/1", _dynamicScope2, "__tests__/template.marko_2_setHtml2/var");
    _$.writeScope(_scope2_id, {
      "ConditionalScope:#text/0": _$.writeExistingScope(_dynamicScope2),
      "ConditionalRenderer:#text/0": _$.dynamicTagId(1 && Child),
      setHtml2
    }, "__tests__/template.marko", "14:2");
  }, 0, _scope0_id, "#text/1");
  _$.write("<hr>");
  _$.resumeSingleNodeForTo(3, 0, 1, i => {
    const _scope3_id = _$.nextScopeId();
    _$.write("<ul>");
    _$.resumeSingleNodeForTo(3, 0, 1, j => {
      const _scope4_id = _$.nextScopeId();
      const _dynamicScope3 = _$.peekNextScope();
      const setHtml3 = _$.dynamicTagInput(_scope4_id, "#text/0", 1 && Child, {}, void 0);
      _$.setTagVar(_scope4_id, "#scopeOffset/1", _dynamicScope3, "__tests__/template.marko_4_setHtml3/var");
      _$.writeScope(_scope4_id, {
        "ConditionalScope:#text/0": _$.writeExistingScope(_dynamicScope3),
        "ConditionalRenderer:#text/0": _$.dynamicTagId(1 && Child),
        setHtml3
      }, "__tests__/template.marko", "26:4");
    }, 0, _scope3_id, "#ul/0", 1);
    _$.write("</ul>");
  }, 0, _scope0_id, "#text/2");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0__hoisted_setHtml3");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    _hoisted_setHtml3
  }, "__tests__/template.marko", 0, {
    _hoisted_setHtml3: "27:20"
  });
  _$.resumeClosestBranch(_scope0_id);
});