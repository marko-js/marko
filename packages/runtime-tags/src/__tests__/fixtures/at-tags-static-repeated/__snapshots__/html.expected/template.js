import * as _$ from "@marko/runtime-tags/debug/html";
import _list from "./tags/list/index.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _list({
    item: _$.attrTags(_$.attrTag({
      content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
        const _scope1_id = _$.nextScopeId();
        _$.write("Hello");
      }), "__tests__/template.marko_1_renderer", _scope0_id)
    }), {
      content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
        const _scope2_id = _$.nextScopeId();
        _$.write("Again");
      }), "__tests__/template.marko_2_renderer", _scope0_id)
    })
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);