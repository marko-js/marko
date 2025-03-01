import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  const _scope2_ = new Map();
  const _hoisted_el3 = _$.hoist(_scope0_id, "__tests__/template.marko_0/_hoisted_el3");
  const _scope3_ = new Map();
  _$.forTo(5, 0, 1, _value => {
    const _scope1_id = _$.nextScopeId();
    const el = _$.nodeRef();
    _scope1_.set(_value, _$.ensureScopeWithId(_scope1_id));
    _$.write(`<div></div>${_$.markResumeNode(_scope1_id, "#div/0")}`);
    _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "1:2");
  });
  const to = 3;
  _$.write("<hr>");
  _$.resumeSingleNodeForTo(to, 0, 1, _value2 => {
    const _scope2_id = _$.nextScopeId();
    const el2 = _$.nodeRef();
    _scope2_.set(_value2, _$.ensureScopeWithId(_scope2_id));
    _$.write(`<div></div>${_$.markResumeNode(_scope2_id, "#div/0")}`);
    _$.writeScope(_scope2_id, {}, "__tests__/template.marko", "15:2");
  }, _scope0_id, "#text/1");
  _$.write("<hr>");
  _$.forTo(3, 0, 1, i => {
    const _scope3_id = _$.nextScopeId();
    const _scope4_ = new Map();
    _$.write("<ul>");
    _$.forTo(3, 0, 1, j => {
      const _scope4_id = _$.nextScopeId();
      const el3 = _$.nodeRef();
      _scope4_.set(j, _$.ensureScopeWithId(_scope4_id));
      _$.write(`<li${_$.attr("data-index", i * 4 + j)}></li>${_$.markResumeNode(_scope4_id, "#li/0")}`);
      _$.writeScope(_scope4_id, {}, "__tests__/template.marko", "30:4");
    }, 1);
    _scope3_.set(i, _$.ensureScopeWithId(_scope3_id));
    _$.write("</ul>");
    _$.writeScope(_scope3_id, {
      "#ul/0(": _scope4_.size ? _scope4_ : undefined
    }, "__tests__/template.marko", "28:2");
  });
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0__hoisted_el3");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    _hoisted_el3,
    "#text/0(": _scope1_.size ? _scope1_ : undefined,
    "#text/1(": _scope2_.size ? _scope2_ : undefined,
    "#text/2(": _scope3_.size ? _scope3_ : undefined
  }, "__tests__/template.marko", 0, {
    _hoisted_el3: 0
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);