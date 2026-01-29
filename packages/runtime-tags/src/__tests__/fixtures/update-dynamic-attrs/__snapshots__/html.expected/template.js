import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let a = 0;
  _._html("<div");
  _._attrs_content(input.value, "#div/0", $scope0_id, "div");
  _._html(`</div>${_._el_resume($scope0_id, "#div/0")}<div`);
  _._attrs_content({
    a: a,
    ...input.value
  }, "#div/1", $scope0_id, "div");
  _._html(`</div>${_._el_resume($scope0_id, "#div/1")}<div${_._attr("a", a)}`);
  _._attrs_partial_content(input.value, {
    a: 1
  }, "#div/2", $scope0_id, "div");
  _._html(`</div>${_._el_resume($scope0_id, "#div/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0_input_value_a");
  _._script($scope0_id, "__tests__/template.marko_0_input_value");
  _._scope($scope0_id, {
    input_value: input.value,
    a
  }, "__tests__/template.marko", 0, {
    input_value: ["input.value"],
    a: "1:6"
  });
  _._resume_branch($scope0_id);
});