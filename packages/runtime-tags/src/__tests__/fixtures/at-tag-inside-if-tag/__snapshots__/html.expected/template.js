import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag/index.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    x
  } = input;
  const _childScope = _$.peekNextScope();
  let _thing;
  if (x) {
    _thing = _$.attrTag({
      x: 1,
      content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
        const _scope1_id = _$.nextScopeId();
        _$.write("Hello");
      }, _scope0_id)
    });
  } else {
    _thing = _$.attrTag({
      x: 2,
      content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
        const _scope2_id = _$.nextScopeId();
        _$.write("Goodbye");
      }, _scope0_id)
    });
  }
  _customTag({
    thing: _thing
  });
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0);
});