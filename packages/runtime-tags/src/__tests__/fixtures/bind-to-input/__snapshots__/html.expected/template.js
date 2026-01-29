import * as _ from "@marko/runtime-tags/debug/html";
import _counter from "./tags/counter.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $x__closures = new Set();
  let x = 0;
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.count */2: /* x */1
  });
  _counter({
    count: x,
    countChange: _._resume(_new_x => {
      x = _new_x;
    }, "__tests__/template.marko_0/countChange", $scope0_id),
    id: "controlled",
    content: _._content("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html(`${_._escape(x)}${_._el_resume($scope1_id, "#text/0")}`);
      _._subscribe($x__closures, _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:x": 0
      }, "__tests__/template.marko", "3:2"));
      _._resume_branch($scope1_id);
    })
  });
  const $childScope2 = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.count */2: /* x */1
  });
  _counter({
    count: x,
    id: "uncontrolled",
    content: _._content("__tests__/template.marko_2_content", () => {
      _._scope_reason();
      const $scope2_id = _._scope_id();
      _._html(`${_._escape(x)}${_._el_resume($scope2_id, "#text/0")}`);
      _._subscribe($x__closures, _._scope($scope2_id, {
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:x": 1
      }, "__tests__/template.marko", "4:2"));
      _._resume_branch($scope2_id);
    })
  });
  _._scope($scope0_id, {
    "ClosureScopes:x": $x__closures,
    "#childScope/0": _._existing_scope($childScope),
    "#childScope/1": _._existing_scope($childScope2)
  }, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});