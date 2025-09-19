import * as _ from "@marko/runtime-tags/debug/html";
import _layout from "./tags/layout.marko";
export default _._template("__tests__/template.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  const $name__closures = new Set();
  const {
    name
  } = input;
  _layout({
    content: _._content("__tests__/template.marko_1_content", () => {
      const $serialize2 = _._get_serialize_reason();
      const $scope1_id = _._scope_id();
      _._html(`<h1>Hello ${_._sep(_._serialize_guard($serialize, /* name */0))}${_._escape(name)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($serialize, /* name */0))}</h1>`);
      _._serialize_guard($serialize, /* name */0) && _._subscribe($name__closures, _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:name": _._serialize_if($serialize, /* name */0) && 0
      }, "__tests__/template.marko", "2:2"));
      _._resume_branch($scope1_id);
    })
  });
  _._serialize_guard($serialize, /* name */0) && _._scope($scope0_id, {
    "ClosureScopes:name": _._serialize_if($serialize, /* name */0) && $name__closures
  }, "__tests__/template.marko", 0);
});