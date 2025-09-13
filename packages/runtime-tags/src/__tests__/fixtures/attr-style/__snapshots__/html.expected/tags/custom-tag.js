import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/custom-tag.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  _._html(`<div${_._attr_style(input.style)}></div>${_._el_resume($scope0_id, "#div/0", _._serialize_guard($serialize, /* input.style */3))}`);
  _._if(() => {
    if (input.test) {
      const $scope1_id = _._scope_id();
      _._html(`<div${_._attr_style(input.test.style)} id=test>`);
      _._dynamic_tag($scope1_id, "#text/1", input.test.content, {}, 0, 0, _._serialize_guard($serialize, /* input.test.content */6));
      _._html(`</div>${_._el_resume($scope1_id, "#div/0", _._serialize_guard($serialize, /* input.test.style */5))}`);
      _._serialize_guard($serialize, /* input.test,input.test.style,input.test.content */2) && _._scope($scope1_id, {
        _: _._serialize_if($serialize, /* input.test.style, input.test.content */1) && _._scope_with_id($scope0_id)
      }, "__tests__/tags/custom-tag.marko", "3:2");
      return 0;
    }
  }, $scope0_id, "#text/1", _._serialize_guard($serialize, /* input.test,input.test.style,input.test.content */2), _._serialize_guard($serialize, /* input.test */4), _._serialize_guard($serialize, /* input.test */4), 0, 1);
  _._serialize_guard($serialize, /* input.style,input.test */0) && _._scope($scope0_id, {
    input_test_style: _._serialize_if($serialize, /* input.test */4) && input.test?.style,
    input_test_content: _._serialize_if($serialize, /* input.test */4) && input.test?.content
  }, "__tests__/tags/custom-tag.marko", 0, {
    input_test_style: ["input.test.style"],
    input_test_content: ["input.test.content"]
  });
});