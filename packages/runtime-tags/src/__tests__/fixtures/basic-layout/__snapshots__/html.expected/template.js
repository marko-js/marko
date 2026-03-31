import * as _ from "@marko/runtime-tags/debug/html";
import _layout from "./tags/layout.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason(),
    $sg__input_name = _._serialize_guard($scope0_reason, /* input.name */0),
    $si__input_name = _._serialize_if($scope0_reason, /* input.name */0);
  const $scope0_id = _._scope_id();
  const $name__closures = new Set();
  const {
    name
  } = input;
  _layout({
    content: _._content("__tests__/template.marko_1_content", () => {
      const $scope1_reason = _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html(`<h1>Hello ${_._sep(($sg__input_name))}${_._escape(name)}${_._el_resume($scope1_id, "#text/0", ($sg__input_name))}</h1>`);
      ($si__input_name) && _._subscribe($name__closures, _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "2:2"));
      _._resume_branch($scope1_id);
    })
  });
  ($si__input_name) && _._scope($scope0_id, {
    "ClosureScopes:name": $name__closures
  }, "__tests__/template.marko", 0);
}, 1);