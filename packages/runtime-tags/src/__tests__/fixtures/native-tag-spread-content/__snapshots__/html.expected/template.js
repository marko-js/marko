import * as _$ from "@marko/runtime-tags/debug/html";
import _myDiv from "./tags/my-div.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _myDiv({
    content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      _$.write("Hello");
    }, $scope0_id)
  });
});