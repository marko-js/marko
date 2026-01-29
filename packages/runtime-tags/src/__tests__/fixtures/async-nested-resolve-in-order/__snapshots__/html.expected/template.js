import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("a");
  _._await($scope0_id, "#text/0", resolveAfter("b", 1), result1 => {
    const $scope1_id = _._scope_id();
    _._html(_._escape(result1));
    _._await($scope1_id, "#text/1", resolveAfter("c", 2), result2 => {
      const $scope2_id = _._scope_id();
      _._html(_._escape(result2));
      _._await($scope2_id, "#text/1", resolveAfter("d", 3), result3 => {
        const $scope3_id = _._scope_id();
        _._html(_._escape(result3));
      }, 0);
      _._html("e");
    }, 0);
    _._html("f");
  }, 0);
  _._html("g");
  _._await($scope0_id, "#text/1", resolveAfter("h", 1), result4 => {
    const $scope4_id = _._scope_id();
    _._html(_._escape(result4));
    _._await($scope4_id, "#text/1", resolveAfter("i", 2), result5 => {
      const $scope5_id = _._scope_id();
      _._html(_._escape(result5));
      _._await($scope5_id, "#text/1", resolveAfter("j", 3), result6 => {
        const $scope6_id = _._scope_id();
        _._html(_._escape(result6));
      }, 0);
      _._html("k");
    }, 0);
    _._html("l");
  }, 0);
  _._html("m");
});