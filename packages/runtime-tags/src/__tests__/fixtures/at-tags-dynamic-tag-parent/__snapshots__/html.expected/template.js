import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    x
  } = input;
  _$.dynamicTag(_scope0_id, "#text/0", x, {
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
  }, _scope0_id), 0, 1);
});