import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $count__closures = new Set();
  let count = 0;
  _._html("<div>");
  _._await($scope0_id, "#text/0", Promise.resolve("a"), value => {
    const $scope1_id = _._scope_id();
    _._html(`Got: ${_._escape(value)} <!>${_._escape(count)}${_._el_resume($scope1_id, "#text/1")}`);
    _._subscribe($count__closures, _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id),
      "ClosureSignalIndex:count": 0
    }, "__tests__/template.marko", "5:4"));
    _._resume_branch($scope1_id);
  });
  _._await($scope0_id, "#text/1", resolveAfter("b", 2), value => {
    const $scope2_id = _._scope_id();
    _._html(`Got: ${_._escape(value)} <!>${_._escape(count)}${_._el_resume($scope2_id, "#text/1")}`);
    _._subscribe($count__closures, _._scope($scope2_id, {
      _: _._scope_with_id($scope0_id),
      "ClosureSignalIndex:count": 1
    }, "__tests__/template.marko", "9:4"));
    _._resume_branch($scope2_id);
  });
  _._await($scope0_id, "#text/2", resolveAfter("c", 1), value => {
    const $scope3_id = _._scope_id();
    _._html(`Got: ${_._escape(value)} <!>${_._escape(count)}${_._el_resume($scope3_id, "#text/1")}`);
    _._subscribe($count__closures, _._scope($scope3_id, {
      _: _._scope_with_id($scope0_id),
      "ClosureSignalIndex:count": 2
    }, "__tests__/template.marko", "13:4"));
    _._resume_branch($scope3_id);
  });
  _._html(`<button>Inc</button>${_._el_resume($scope0_id, "#button/3")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count,
    "ClosureScopes:count": $count__closures
  }, "__tests__/template.marko", 0, {
    count: "3:6"
  });
  _._resume_branch($scope0_id);
});