import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/my-for.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._for_to(input.to, 0, 1, (...args) => {
    const $scope1_id = _._scope_id();
    _._dynamic_tag($scope1_id, "#text/0", input.content, [...args], 0, 1, _._serialize_guard($scope0_reason, /* input.to, input.content */0));
    _._serialize_if($scope0_reason, /* input.to, input.content */0) && _._scope($scope1_id, {
      $params2: _._serialize_if($scope0_reason, /* input.content */2) && $params2,
      _: _._scope_with_id($scope0_id)
    }, "__tests__/tags/my-for.marko", "1:2", {
      $params2: "1:6"
    });
  }, 0, $scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input.to, input.content */0), _._serialize_guard($scope0_reason, /* input.to */1), _._serialize_guard($scope0_reason, /* input.to */1));
  _._serialize_if($scope0_reason, /* input.to */1) && _._scope($scope0_id, {
    input_content: input.content
  }, "__tests__/tags/my-for.marko", 0, {
    input_content: ["input.content"]
  });
});