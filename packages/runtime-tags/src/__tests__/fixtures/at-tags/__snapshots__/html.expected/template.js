import * as _$ from "@marko/runtime-tags/debug/html";
import _hello from "./tags/hello/index.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _hello({
    foo: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
        const $scope1_id = _$.nextScopeId();
        _$.write("Foo!");
      }, $scope0_id)
    })
  });
});