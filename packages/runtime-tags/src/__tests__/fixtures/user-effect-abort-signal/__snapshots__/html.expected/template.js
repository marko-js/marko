import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let a = 0;
  let b = 0;
  _._html(`<div>${_._escape(a)}${_._el_resume($scope0_id, "#text/0")} <!>${_._escape(b)}${_._el_resume($scope0_id, "#text/1")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_input_value");
  _._scope($scope0_id, {
    input_value: input.value
  }, "__tests__/template.marko", 0, {
    input_value: ["input.value"]
  });
  _._resume_branch($scope0_id);
});