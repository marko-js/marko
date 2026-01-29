import testLog from "./test-log";
const staticVar = "static var";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  console.log("identifier");
  const tagVar = "tag var";
  console.log(tagVar);
  console.log(staticVar);
  let output = JSON.stringify(testLog);
  _._html(`<!>${_._escape(output)}${_._el_resume($scope0_id, "#text/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});