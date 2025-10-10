import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/custom-tag.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div${_._attr_class(input.class)}></div>${_._el_resume($scope0_id, "#div/0", _._serialize_guard($scope0_reason, /* input.class */2))}`);
  _._if(() => {
    if (input.test) {
      const $scope1_id = _._scope_id();
      _._html(`<div${_._attr_class(input.test.class)} id=test>`);
      _._dynamic_tag($scope1_id, "#text/1", input.test.content, {}, 0, 0, _._serialize_guard($scope0_reason, /* input.test.content */5));
      _._html(`</div>${_._el_resume($scope1_id, "#div/0", _._serialize_guard($scope0_reason, /* input.test.class */4))}`);
      _._serialize_guard($scope0_reason, /* input.test */3) && _._scope($scope1_id, {
        _: _._serialize_if($scope0_reason, /* input.test.class, input.test.content */1) && _._scope_with_id($scope0_id)
      }, "__tests__/tags/custom-tag.marko", "3:2");
      return 0;
    }
  }, $scope0_id, "#text/1", _._serialize_guard($scope0_reason, /* input.test */3), _._serialize_guard($scope0_reason, /* input.test */3), _._serialize_guard($scope0_reason, /* input.test */3), 0, 1);
  _._serialize_guard($scope0_reason, /* input.class, input.test */0) && _._scope($scope0_id, {
    input_test_class: _._serialize_if($scope0_reason, /* input.test */3) && input.test?.class,
    input_test_content: _._serialize_if($scope0_reason, /* input.test */3) && input.test?.content
  }, "__tests__/tags/custom-tag.marko", 0, {
    input_test_class: ["input.test.class"],
    input_test_content: ["input.test.content"]
  });
});