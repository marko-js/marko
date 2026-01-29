import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import * as _ from "@marko/runtime-tags/debug/html";
import _myButton from "./components/my-button.marko";
_s(_myButton, "__tests__/components/my-button.marko");
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $count__closures = new Set();
  let count = 0;
  _._dynamic_tag($scope0_id, "#text/0", _myButton, {
    onClick: _._resume(function () {
      count++;
    }, "__tests__/template.marko_0/onClick", $scope0_id)
  }, _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html(`${_._escape(count)}${_._el_resume($scope1_id, "#text/0")}`);
    _._subscribe($count__closures, _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id),
      "ClosureSignalIndex:count": 0
    }, "__tests__/template.marko", "2:2"));
    _._resume_branch($scope1_id);
  }, $scope0_id));
  _._scope($scope0_id, {
    count,
    "ClosureScopes:count": $count__closures
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _._resume_branch($scope0_id);
});