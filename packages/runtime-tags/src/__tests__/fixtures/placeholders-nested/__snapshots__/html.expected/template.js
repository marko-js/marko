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
    });
    _$.write("d");
    _$.tryContent($scope1_id, "#text/1", _$.registerContent("__tests__/template.marko_4_renderer", () => {
      const $scope4_id = _$.nextScopeId();
      _$.write("e");
      _$.fork($scope4_id, "#text/0", resolveAfter("f", 3), data => {
        const $scope6_id = _$.nextScopeId();
        _$.write(_$.escapeXML(data));
      });
      _$.write("g");
    }, $scope1_id), {
      placeholder: _$.attrTag({
        content: _$.registerContent("__tests__/template.marko_5_renderer", () => {
          const $scope5_id = _$.nextScopeId();
          _$.write("_A_");
        }, $scope1_id)
      })
    });
  }, $scope0_id), {
    placeholder: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
        const $scope2_id = _$.nextScopeId();
        _$.write("_B_");
      }, $scope0_id)
    })
  });
  _$.write("h");
  _$.fork($scope0_id, "#text/1", resolveAfter("i", 1), data => {
    const $scope7_id = _$.nextScopeId();
    _$.write(_$.escapeXML(data));
  });
  _$.write("j");
});