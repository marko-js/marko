import * as _ from "@marko/runtime-tags/debug/html";
import _inner from "./inner.marko";
export default _._template("__tests__/tags/outer.marko", input => {
  const $scope0_reason = _._scope_reason(),
    $si__input_content = _._serialize_if($scope0_reason, /* input.content */0);
  const $scope0_id = _._scope_id();
  const $input_content__closures = new Set();
  _inner({
    content: _._content("__tests__/tags/outer.marko_1_content", () => {
      const $scope1_reason = _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html(`<button>click</button>${_._el_resume($scope1_id, "#button/0")}`);
      _._dynamic_tag($scope1_id, "#text/1", input.content, {}, 0, 0, (_._serialize_guard($scope0_reason, /* input.content */0)));
      _._script($scope1_id, "__tests__/tags/outer.marko_1");
      _._subscribe(($si__input_content) && $input_content__closures, _._scope($scope1_id, {
        _: ($si__input_content) && _._scope_with_id($scope0_id)
      }, "__tests__/tags/outer.marko", "1:2"));
      _._resume_branch($scope1_id);
    })
  });
  $si__input_content && _._scope($scope0_id, {
    "ClosureScopes:input_content": $input_content__closures
  }, "__tests__/tags/outer.marko", 0);
});