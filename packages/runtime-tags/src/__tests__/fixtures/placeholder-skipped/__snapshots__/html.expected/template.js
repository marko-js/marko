import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("a");
  _$.tryContent($scope0_id, "#text/0", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write("b");
  }, $scope0_id), {
    placeholder: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
        const $scope2_id = _$.nextScopeId();
        _$.write("_A_");
      }, $scope0_id)
    })
  });
  _$.write("c");
  _$.fork($scope0_id, "#text/1", resolveAfter("d", 1), data => {
    const $scope3_id = _$.nextScopeId();
    _$.write(_$.escapeXML(data));
  }, 0);
  _$.write("e");
});