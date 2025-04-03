import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("a");
  _$.fork($scope0_id, "#text/0", resolveAfter("b", 1), result1 => {
    const $scope1_id = _$.nextScopeId();
    _$.write(_$.escapeXML(result1));
    _$.fork($scope1_id, "#text/1", resolveAfter("c", 1), result2 => {
      const $scope2_id = _$.nextScopeId();
      _$.write(_$.escapeXML(result2));
      _$.fork($scope2_id, "#text/1", resolveAfter("d", 1), result3 => {
        const $scope3_id = _$.nextScopeId();
        _$.write(_$.escapeXML(result3));
      });
      _$.write("e");
    });
    _$.write("f");
  });
  _$.write("g");
  _$.fork($scope0_id, "#text/1", resolveAfter("h", 1), result4 => {
    const $scope4_id = _$.nextScopeId();
    _$.write(_$.escapeXML(result4));
    _$.fork($scope4_id, "#text/1", resolveAfter("i", 1), result5 => {
      const $scope5_id = _$.nextScopeId();
      _$.write(_$.escapeXML(result5));
      _$.fork($scope5_id, "#text/1", resolveAfter("j", 1), result6 => {
        const $scope6_id = _$.nextScopeId();
        _$.write(_$.escapeXML(result6));
      });
      _$.write("k");
    });
    _$.write("l");
  });
  _$.write("m");
});