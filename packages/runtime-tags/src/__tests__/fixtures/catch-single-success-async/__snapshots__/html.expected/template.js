import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("a");
  _$.tryContent($scope0_id, "#text/0", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write("b");
    _$.fork($scope1_id, "#text/0", resolveAfter("c", 2), data => {
      const $scope3_id = _$.nextScopeId();
      _$.write(_$.escapeXML(data));
    }, 0);
    _$.write("d");
  }, $scope0_id), {
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", error => {
        const $scope2_id = _$.nextScopeId();
        _$.write("ERROR!");
      }, $scope0_id)
    })
  });
  _$.write("f");
  _$.fork($scope0_id, "#text/1", resolveAfter("g", 1), data => {
    const $scope4_id = _$.nextScopeId();
    _$.write(_$.escapeXML(data));
  }, 0);
  _$.write("h");
});