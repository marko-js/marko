import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _hoisted_el = _$.hoist(_scope0_id, "__tests__/template.marko_0/_hoisted_el");
  let _ifScopeId;
  if (true) {
    const _scope1_id = _$.nextScopeId();
    const el2 = _$.nodeRef();
    _$.write(`<div></div>${_$.markResumeNode(_scope1_id, "#div/0")}`);
    _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "19:2");
    _ifScopeId = _scope1_id;
  }
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0__hoisted_el");
  _$.writeScope(_scope0_id, {
    _hoisted_el: _hoisted_el,
    "#text/0!": _$.getScopeById(_ifScopeId)
  }, "__tests__/template.marko", 0, {
    _hoisted_el: "20:8"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);