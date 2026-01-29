import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = "b";
  const tag = "select";
  _._dynamic_tag($scope0_id, "#text/0", tag ? "select" : {}, {
    value,
    valueChange: _._resume(function (v) {
      value = v;
    }, "__tests__/template.marko_0/valueChange", $scope0_id)
  }, _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html(`<option${_._attrs({
      value: "a"
    }, "#option/0", $scope1_id, "option")}>A</option>${_._el_resume($scope1_id, "#option/0")}<option${_._attrs({
      value: "b"
    }, "#option/1", $scope1_id, "option")}>B</option>${_._el_resume($scope1_id, "#option/1")}<option${_._attrs({
      value: "c"
    }, "#option/2", $scope1_id, "option")}>C</option>${_._el_resume($scope1_id, "#option/2")}`);
    _._script($scope1_id, "__tests__/template.marko_1");
    _._scope($scope1_id, {}, "__tests__/template.marko", "3:4");
  }, $scope0_id));
  _._html(`<span>${_._escape(value)}${_._el_resume($scope0_id, "#text/1")}</span>`);
  _._scope($scope0_id, {
    tag
  }, "__tests__/template.marko", 0, {
    tag: "2:8"
  });
  _._resume_branch($scope0_id);
});