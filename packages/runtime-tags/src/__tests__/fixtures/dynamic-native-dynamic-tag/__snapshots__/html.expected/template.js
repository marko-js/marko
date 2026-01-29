import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let tagName = "span";
  let className = "A";
  _._dynamic_tag($scope0_id, "#text/0", tagName, {
    class: className
  }, _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html("body content");
  }, $scope0_id));
  _._html(`<button></button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_tagName");
  _._scope($scope0_id, {
    tagName,
    className
  }, "__tests__/template.marko", 0, {
    tagName: "1:6",
    className: "2:6"
  });
  _._resume_branch($scope0_id);
});