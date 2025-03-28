import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _hoisted_el3 = _$.hoist(_scope0_id, "__tests__/template.marko_0__hoisted_el3/hoist");
  _$.resumeSingleNodeForTo(5, 0, 1, () => {
    const _scope1_id = _$.nextScopeId();
    const el = _$.nodeRef();
    _$.write(`<div></div>${_$.markResumeNode(_scope1_id, "#div/0")}`);
    _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "1:2");
  }, 0, _scope0_id, "#text/0");
  let to = 3;
  _$.write("<hr>");
  _$.resumeSingleNodeForTo(to, 0, 1, () => {
    const _scope2_id = _$.nextScopeId();
    const el2 = _$.nodeRef();
    _$.write(`<div></div>${_$.markResumeNode(_scope2_id, "#div/0")}`);
    _$.writeScope(_scope2_id, {}, "__tests__/template.marko", "15:2");
  }, 0, _scope0_id, "#text/1");
  _$.write("<hr>");
  _$.resumeSingleNodeForTo(3, 0, 1, i => {
    const _scope3_id = _$.nextScopeId();
    _$.write("<ul>");
    _$.resumeSingleNodeForTo(3, 0, 1, j => {
      const _scope4_id = _$.nextScopeId();
      const el3 = _$.nodeRef();
      _$.write(`<li${_$.attr("data-index", i * 4 + j)}></li>${_$.markResumeNode(_scope4_id, "#li/0")}`);
      _$.writeScope(_scope4_id, {}, "__tests__/template.marko", "30:4");
    }, 0, _scope3_id, "#ul/0", 1);
    _$.write("</ul>");
  }, 0, _scope0_id, "#text/2");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0__hoisted_el3");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    _hoisted_el3
  }, "__tests__/template.marko", 0, {
    _hoisted_el3: 0
  });
  _$.resumeClosestBranch(_scope0_id);
});