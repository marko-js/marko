import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("a");
  _$.tryContent(_scope0_id, "#text/0", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write("b");
  }, _scope0_id), {
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", error => {
        const _scope2_id = _$.nextScopeId();
        _$.write("ERROR!");
      }, _scope0_id)
    })
  });
  _$.write("c");
});