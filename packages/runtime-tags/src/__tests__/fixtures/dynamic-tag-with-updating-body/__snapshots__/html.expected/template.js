import _counter from "./tags/counter.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let tagName = "div";
  _._dynamic_tag($scope0_id, "#text/0", tagName, {}, _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _counter({});
  }, $scope0_id));
  _._html(`<button id=changeTag></button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_tagName");
  _._scope($scope0_id, {
    tagName
  }, "__tests__/template.marko", 0, {
    tagName: "1:6"
  });
  _._resume_branch($scope0_id);
});