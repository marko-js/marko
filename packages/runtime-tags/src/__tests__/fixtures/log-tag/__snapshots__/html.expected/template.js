const staticVar = "static var";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  console.log("identifier");
  const tagVar = "tag var";
  console.log(tagVar);
  console.log(staticVar);
});