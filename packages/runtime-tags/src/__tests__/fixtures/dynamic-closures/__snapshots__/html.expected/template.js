const a = 1;
import * as _ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $c__closures = new Set();
  const b = 2;
  let c = 3;
  _._html(`<button></button>${_._el_resume($scope0_id, "#button/0")}`);
  _customTag({
    content: _._content("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html(`${_._escape(a)} ${_._escape(b)} <!>${_._escape(c)}${_._el_resume($scope1_id, "#text/2")}`);
      _._subscribe($c__closures, _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:c": 0
      }, "__tests__/template.marko", "6:2"));
      _._resume_branch($scope1_id);
    })
  });
  _._html("<div>");
  if (Math.random()) {
    const $scope2_id = _._scope_id();
    if (Math.random()) {
      const $scope3_id = _._scope_id();
      _._html(`${_._escape(a)} ${_._escape(b)} <!>${_._escape(c)}${_._el_resume($scope3_id, "#text/2")}`);
      _._subscribe($c__closures, _._scope($scope3_id, {
        _: _._scope_with_id($scope2_id),
        "ClosureSignalIndex:c": 1
      }, "__tests__/template.marko", "11:6"));
    }
    _._scope($scope2_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "10:4");
  }
  _._html("</div>");
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    "ClosureScopes:c": $c__closures
  }, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});