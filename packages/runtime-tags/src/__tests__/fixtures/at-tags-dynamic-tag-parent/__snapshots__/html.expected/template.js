import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    x
  } = input;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", x, {
    footer: _$.attrTag({
      class: "my-footer",
      content: _$.registerContent("__tests__/template.marko_3_renderer", () => {
        const _scope3_id = _$.nextScopeId();
        _$.write("Footer content");
      }, _scope0_id)
    }),
    header: _$.attrTag({
      class: "my-header",
      content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
        const _scope2_id = _$.nextScopeId();
        _$.write("Header content");
      }, _scope0_id)
    })
  }, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write("Body content");
  }, _scope0_id));
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.dynamicTagId(x)
  }, "__tests__/template.marko", 0);
});