import * as _ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag/index.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    x
  } = input;
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.thing.x, input.thing.content */0: _._serialize_guard($scope0_reason, /* input.x */0),
    /* input.thing.x */1: _._serialize_guard($scope0_reason, /* input.x */0),
    /* input.thing.content */2: _._serialize_guard($scope0_reason, /* input.x */0)
  });
  let $thing;
  if (x) {
    $thing = _.attrTag({
      x: 1,
      content: _._content("__tests__/template.marko_1_content", () => {
        _._scope_reason();
        const $scope1_id = _._scope_id();
        _._html("Hello");
      })
    });
  } else {
    $thing = _.attrTag({
      x: 2,
      content: _._content("__tests__/template.marko_2_content", () => {
        _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html("Goodbye");
      })
    });
  }
  _customTag({
    thing: $thing
  });
  _._serialize_if($scope0_reason, /* input.x */0) && _._scope($scope0_id, {
    "#childScope/0": _._serialize_if($scope0_reason, /* input.x */0) && _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
});