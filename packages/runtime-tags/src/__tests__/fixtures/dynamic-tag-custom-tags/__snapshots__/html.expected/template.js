import child1 from "./tags/child1.marko";
import child2 from "./tags/child2.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let tagName = child1;
  let val = 3;
  _._dynamic_tag($scope0_id, "#text/0", tagName, {
    value: val
  });
  _._html(`<button></button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_tagName");
  _._scope($scope0_id, {
    tagName,
    val
  }, "__tests__/template.marko", 0, {
    tagName: "4:6",
    val: "5:6"
  });
  _._resume_branch($scope0_id);
});