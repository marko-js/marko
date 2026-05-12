import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/child.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = input.value;
  _._html(`<button>${_._escape(input.label)}${_._el_resume($scope0_id, "#text/1", (_._serialize_guard($scope0_reason, /* input.label */0)))}: <!>${_._escape(count)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/child.marko_0_count");
  _._scope($scope0_id, {
    count
  }, "__tests__/child.marko", 0, {
    count: "1:6"
  });
  _._resume_branch($scope0_id);
});