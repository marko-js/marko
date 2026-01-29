import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let tagName = "span";
  _._dynamic_tag($scope0_id, "#text/0", tagName, {
    class: "A",
    onClick: _._resume(function () {
      tagName = tagName === "span" ? "div" : "span";
    }, "__tests__/template.marko_0/onClick", $scope0_id)
  }, _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html("body content");
  }, $scope0_id));
  _._scope($scope0_id, {
    tagName
  }, "__tests__/template.marko", 0, {
    tagName: "1:6"
  });
  _._resume_branch($scope0_id);
});