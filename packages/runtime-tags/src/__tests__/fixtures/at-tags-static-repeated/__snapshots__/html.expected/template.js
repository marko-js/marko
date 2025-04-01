import * as _$ from "@marko/runtime-tags/debug/html";
import _list from "./tags/list/index.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _list({
    item: _$.attrTags(_$.attrTag({
      content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
        const _scope1_id = _$.nextScopeId();
        _$.write("Hello");
      }, _scope0_id)
    }), {
      content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
        const _scope2_id = _$.nextScopeId();
        _$.write("Again");
      }, _scope0_id)
    })
  });
});