let sideEffect = 3;
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $count__closures = new Set();
  let count = 0;
  const MyThing = {
    content: _._content_resume("__tests__/template.marko_1_content", () => {
      const $scope1_id = _._scope_id();
      _._scope_reason();
      _._html(`${_._escape(count)}${_._el_resume($scope1_id, "#text/0")} ${_._escape(sideEffect++)}`);
      _._subscribe($count__closures, _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:count": 0
      }, "__tests__/template.marko", "5:1"));
      _._resume_branch($scope1_id);
    }, $scope0_id)
  };
  _._html("<button>");
  _._attr_content("#button/0", $scope0_id, (count, MyThing));
  _._html(`</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count,
    MyThing,
    "ClosureScopes:count": $count__closures
  }, "__tests__/template.marko", 0, {
    count: "3:5",
    MyThing: "5:8"
  });
  _._resume_branch($scope0_id);
});