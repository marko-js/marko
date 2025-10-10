import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = 1;
  let y = 2;
  _._html(`<button>Inc</button>${_._el_resume($scope0_id, "#button/0")}`);
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.content, input.value */0: /* x */1,
    /* input.value */2: /* x */1
  });
  _child({
    value: x,
    content: _._content_resume("__tests__/template.marko_1_content", outer => {
      const $scope1_reason = _._scope_reason();
      const $scope1_id = _._scope_id();
      const $child_content__outer__closures = new Set();
      _child({
        value: y,
        content: _._content_resume("__tests__/template.marko_2_content", inner => {
          const $scope2_reason = _._scope_reason();
          const $scope2_id = _._scope_id();
          _._html(`<div>${_._escape(outer)}${_._el_resume($scope2_id, "#text/0", _._serialize_guard($scope1_reason, /* outer */0))}.${_._sep(_._serialize_guard($scope2_reason, /* inner */0))}${_._escape(inner)}${_._el_resume($scope2_id, "#text/1", _._serialize_guard($scope2_reason, /* inner */0))}</div>`);
          _._subscribe($child_content__outer__closures, _._scope($scope2_id, {
            _: _._scope_with_id($scope1_id),
            "ClosureSignalIndex:outer": _._serialize_if($scope1_reason, /* outer */0) && 0
          }, "__tests__/template.marko", "7:6"));
          _._resume_branch($scope2_id);
        }, $scope1_id)
      });
      _._scope($scope1_id, {
        outer,
        _: _._scope_with_id($scope0_id),
        "ClosureScopes:outer": _._serialize_if($scope1_reason, /* outer */0) && $child_content__outer__closures
      }, "__tests__/template.marko", "6:2", {
        outer: "6:8"
      });
      _._resume_branch($scope1_id);
    }, $scope0_id)
  });
  _._script($scope0_id, "__tests__/template.marko_0_x");
  _._scope($scope0_id, {
    x,
    y,
    "#childScope/1": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    y: "2:6"
  });
  _._resume_branch($scope0_id);
});