import { rejectAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("a");
  _._await($scope0_id, "#text/0", rejectAfter(new Error("ERROR!"), 1), () => {
    const $scope1_id = _._scope_id();
    _._html("failed");
  }, 0);
  _._html("b");
});