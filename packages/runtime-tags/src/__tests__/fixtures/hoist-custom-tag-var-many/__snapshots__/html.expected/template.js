import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  const _scope2_ = new Map();
  const _hoisted_setHtml3 = _$.hoist(_scope0_id, "__tests__/template.marko_0__hoisted_setHtml3/hoist");
  const _scope3_ = new Map();
  _$.forTo(5, 0, 1, _value => {
    const _scope1_id = _$.nextScopeId();
    const _childScope = _$.peekNextScope();
    const setHtml = _child({});
    _$.setTagVar(_scope1_id, "#scopeOffset/1", _childScope, "__tests__/template.marko_1_setHtml/var");
    _scope1_.set(_value, _$.ensureScopeWithId(_scope1_id));
    _$.writeScope(_scope1_id, {
      "#childScope/0": _$.writeExistingScope(_childScope),
      setHtml
    }, "__tests__/template.marko", "1:2");
  });
  const to = 3;
  _$.write("<hr>");
  _$.resumeSingleNodeForTo(to, 0, 1, _value2 => {
    const _scope2_id = _$.nextScopeId();
    const _childScope2 = _$.peekNextScope();
    const setHtml2 = _child({});
    _$.setTagVar(_scope2_id, "#scopeOffset/1", _childScope2, "__tests__/template.marko_2_setHtml2/var");
    _scope2_.set(_value2, _$.ensureScopeWithId(_scope2_id));
    _$.writeScope(_scope2_id, {
      "#childScope/0": _$.writeExistingScope(_childScope2),
      setHtml2
    }, "__tests__/template.marko", "12:2");
  }, _scope0_id, "#text/1");
  _$.write("<hr>");
  _$.forTo(3, 0, 1, i => {
    const _scope3_id = _$.nextScopeId();
    const _scope4_ = new Map();
    _$.write("<ul>");
    _$.forTo(3, 0, 1, j => {
      const _scope4_id = _$.nextScopeId();
      const _childScope3 = _$.peekNextScope();
      const setHtml3 = _child({});
      _$.setTagVar(_scope4_id, "#scopeOffset/1", _childScope3, "__tests__/template.marko_4_setHtml3/var");
      _scope4_.set(j, _$.ensureScopeWithId(_scope4_id));
      _$.writeScope(_scope4_id, {
        "#childScope/0": _$.writeExistingScope(_childScope3),
        setHtml3
      }, "__tests__/template.marko", "24:4");
    }, 1);
    _scope3_.set(i, _$.ensureScopeWithId(_scope3_id));
    _$.write("</ul>");
    _$.writeScope(_scope3_id, {
      "#ul/0(": _scope4_.size ? _scope4_ : undefined
    }, "__tests__/template.marko", "22:2");
  });
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0__hoisted_setHtml3");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    _hoisted_setHtml3,
    "#text/0(": _scope1_.size ? _scope1_ : undefined,
    "#text/1(": _scope2_.size ? _scope2_ : undefined,
    "#text/2(": _scope3_.size ? _scope3_ : undefined
  }, "__tests__/template.marko", 0, {
    _hoisted_setHtml3: "25:12"
  });
  _$.resumeClosestBranch(_scope0_id);
});