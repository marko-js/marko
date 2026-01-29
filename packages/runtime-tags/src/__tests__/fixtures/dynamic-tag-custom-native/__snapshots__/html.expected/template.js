import child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let tagName = child;
  _._html(`<button></button>${_._el_resume($scope0_id, "#button/0")}`);
  _._dynamic_tag($scope0_id, "#text/1", tagName, {
    id: "dynamic"
  });
  _._script($scope0_id, "__tests__/template.marko_0_tagName");
  _._scope($scope0_id, {
    tagName
  }, "__tests__/template.marko", 0, {
    tagName: "3:6"
  });
  _._resume_branch($scope0_id);
});