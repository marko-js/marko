import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("a");
  _$.fork($scope0_id, "#text/0", resolveAfter("b", 1), value => {
    const $scope1_id = _$.nextScopeId();
    _$.write(_$.escapeXML(value));
  });
  _$.write("c");
  _$.fork($scope0_id, "#text/1", resolveAfter("d", 2), value => {
    const $scope2_id = _$.nextScopeId();
    _$.write(_$.escapeXML(value));
  });
  _$.write("e");
});