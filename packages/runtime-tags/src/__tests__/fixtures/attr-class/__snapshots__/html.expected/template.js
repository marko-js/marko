import CustomTag from "./tags/custom-tag.marko";
const TestTag = CustomTag;
import * as _ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    c,
    d
  } = input;
  _._html(`<div${_._attr_class(["a", {
    b: c,
    d
  }])}></div>${_._el_resume($scope0_id, "#div/0", _._serialize_guard($scope0_reason, /* input.c, input.d */0))}<div class="a b"></div><div class="a b c"></div>`);
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.class, input.test */0: _._serialize_guard($scope0_reason, /* input.c, input.d */0),
    /* input.class */2: _._serialize_guard($scope0_reason, /* input.c, input.d */0)
  });
  _customTag({
    class: ["a", {
      b: c,
      d
    }]
  });
  _customTag({
    class: ["a", false, "b"]
  });
  _._dynamic_tag($scope0_id, "#text/3", TestTag, {
    class: ["a", {
      b: c,
      d
    }],
    test: _.attrTag({
      class: ["a", {
        b: c,
        d
      }],
      content: _._content_resume("__tests__/template.marko_1_content", () => {
        _._scope_reason();
        const $scope1_id = _._scope_id();
        _._html("Hello");
      }, $scope0_id)
    })
  }, 0, 0, _._serialize_guard($scope0_reason, /* input.c, input.d */0));
  _._serialize_if($scope0_reason, /* input.c, input.d */0) && _._scope($scope0_id, {
    c: _._serialize_if($scope0_reason, /* input.d */2) && c,
    d: _._serialize_if($scope0_reason, /* input.c */1) && d,
    "#childScope/1": _._serialize_if($scope0_reason, /* input.c, input.d */0) && _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    c: "4:10",
    d: "4:13"
  });
});