import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("a");
  _._await($scope0_id, "#text/0", resolveAfter("b", 1), value => {
    const $scope1_id = _._scope_id();
    _._html(_._escape(value));
  }, 0);
  _._html("c");
  _._await($scope0_id, "#text/1", resolveAfter("d", 2), value => {
    const $scope2_id = _._scope_id();
    _._html(_._escape(value));
  }, 0);
  _._html("e");
});