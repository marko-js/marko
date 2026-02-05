import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._if(() => {
    if (input.a + input.b) {
      const $scope1_id = _._scope_id();
      _._html("Hello");
      _._serialize_if($scope0_reason, /* input.a, input.b */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:2");
      return 0;
    }
  }, $scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input.a, input.b */0), _._serialize_guard($scope0_reason, /* input.a, input.b */0), _._serialize_guard($scope0_reason, /* input.a, input.b */0));
  _._if(() => {
    if ((input.a, input.b)) {
      const $scope2_id = _._scope_id();
      _._html("World");
      _._serialize_if($scope0_reason, /* input.a, input.b */0) && _._scope($scope2_id, {}, "__tests__/template.marko", "5:2");
      return 0;
    }
  }, $scope0_id, "#text/1", _._serialize_guard($scope0_reason, /* input.a, input.b */0), _._serialize_guard($scope0_reason, /* input.a, input.b */0), _._serialize_guard($scope0_reason, /* input.a, input.b */0));
  _._html("<div>");
  _._if(() => {
    if (input.x) {
      const $scope3_id = _._scope_id();
      _._html("A");
      _._serialize_if($scope0_reason, /* input.x, input.y */1) && _._scope($scope3_id, {}, "__tests__/template.marko", "10:4");
      return 0;
    } else if (input.y) {
      const $scope4_id = _._scope_id();
      _._html("B");
      _._serialize_if($scope0_reason, /* input.x, input.y */1) && _._scope($scope4_id, {}, "__tests__/template.marko", "13:4");
      return 1;
    } else {
      const $scope5_id = _._scope_id();
      _._html("C");
      _._serialize_if($scope0_reason, /* input.x, input.y */1) && _._scope($scope5_id, {}, "__tests__/template.marko", "16:4");
      return 2;
    }
  }, $scope0_id, "#div/2", _._serialize_guard($scope0_reason, /* input.x, input.y */1), _._serialize_guard($scope0_reason, /* input.x, input.y */1), _._serialize_guard($scope0_reason, /* input.a, input.b */0), "</div>");
  _._serialize_if($scope0_reason, /* input.a, input.b, input.x, input.y */2) && _._scope($scope0_id, {
    input_a: _._serialize_if($scope0_reason, /* input.b */4) && input.a,
    input_b: _._serialize_if($scope0_reason, /* input.a */3) && input.b,
    input_x: _._serialize_if($scope0_reason, /* input.y */6) && input.x,
    input_y: _._serialize_if($scope0_reason, /* input.x */5) && input.y
  }, "__tests__/template.marko", 0, {
    input_a: ["input.a"],
    input_b: ["input.b"],
    input_x: ["input.x"],
    input_y: ["input.y"]
  });
});