import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_reason = _._scope_reason(),
    $sg__input_name = _._serialize_guard($scope0_reason, /* input.name */0);
  const $scope0_id = _._scope_id();
  const {
    name,
    write
  } = input;
  _._html(`<div>${_._escape(name)}${_._el_resume($scope0_id, "#text/0", ($sg__input_name))}</div><span>${_._escape(name)}${_._el_resume($scope0_id, "#text/1", ($sg__input_name))}</span><p>${_._escape(name)}${_._el_resume($scope0_id, "#text/2", $sg__input_name)}</p>`);
  _._script($scope0_id, "__tests__/tags/child.marko_0_name_write");
  _._scope($scope0_id, {
    name,
    write
  }, "__tests__/tags/child.marko", 0, {
    name: "1:9",
    write: "1:15"
  });
  _._resume_branch($scope0_id);
});