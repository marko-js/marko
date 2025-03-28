import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _hoisted_setHtml3 = _$.hoist(_scope0_id, "__tests__/template.marko_0__hoisted_setHtml3/hoist");
  _$.resumeSingleNodeForTo(5, 0, 1, () => {
    const _scope1_id = _$.nextScopeId();
    const _childScope = _$.peekNextScope();
    const setHtml = _child({});
    _$.setTagVar(_scope1_id, "#scopeOffset/1", _childScope, "__tests__/template.marko_1_setHtml/var");
    _$.writeScope(_scope1_id, {
      "#childScope/0": _$.writeExistingScope(_childScope),
      setHtml
    }, "__tests__/template.marko", "1:2");
  }, 0, _scope0_id, "#text/0");
  let to = 3;
  _$.write("<hr>");
  _$.resumeSingleNodeForTo(to, 0, 1, () => {
    const _scope2_id = _$.nextScopeId();
    const _childScope2 = _$.peekNextScope();
    const setHtml2 = _child({});
    _$.setTagVar(_scope2_id, "#scopeOffset/1", _childScope2, "__tests__/template.marko_2_setHtml2/var");
    _$.writeScope(_scope2_id, {
      "#childScope/0": _$.writeExistingScope(_childScope2),
      setHtml2
    }, "__tests__/template.marko", "12:2");
  }, 0, _scope0_id, "#text/1");
  _$.write("<hr>");
  _$.resumeSingleNodeForTo(3, 0, 1, i => {
    const _scope3_id = _$.nextScopeId();
    _$.write("<ul>");
    _$.resumeSingleNodeForTo(3, 0, 1, j => {
      const _scope4_id = _$.nextScopeId();
      const _childScope3 = _$.peekNextScope();
      const setHtml3 = _child({});
      _$.setTagVar(_scope4_id, "#scopeOffset/1", _childScope3, "__tests__/template.marko_4_setHtml3/var");
      _$.writeScope(_scope4_id, {
        "#childScope/0": _$.writeExistingScope(_childScope3),
        setHtml3
      }, "__tests__/template.marko", "24:4");
    }, 0, _scope3_id, "#ul/0", 1);
    _$.write("</ul>");
  }, 0, _scope0_id, "#text/2");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0__hoisted_setHtml3");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    _hoisted_setHtml3
  }, "__tests__/template.marko", 0, {
    _hoisted_setHtml3: "25:12"
  });
  _$.resumeClosestBranch(_scope0_id);
});