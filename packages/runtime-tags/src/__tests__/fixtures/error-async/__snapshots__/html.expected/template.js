import { rejectAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("a");
  _$.fork($scope0_id, "#text/0", rejectAfter(new Error("ERROR!"), 1), () => {
    const $scope1_id = _$.nextScopeId();
    _$.write("failed");
  }, 0);
  _$.write("b");
});