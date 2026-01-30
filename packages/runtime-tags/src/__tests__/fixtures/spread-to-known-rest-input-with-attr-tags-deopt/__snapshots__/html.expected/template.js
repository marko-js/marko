import * as _ from "@marko/runtime-tags/debug/html";
import _wrap from "./tags/wrap.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.class, rest */0: _._serialize_guard($scope0_reason, /* input */0),
    /* input.class */2: _._serialize_guard($scope0_reason, /* input */0)
  });
  _wrap({
    "data-one": 2,
    "data-foo": 1,
    ...input,
    foo: _.attrTags(_.attrTag({
      value: 1,
      desc: _.attrTag({
        content: _._content_resume("__tests__/template.marko_1_content", () => {
          const $scope1_id = _._scope_id();
          _._html("One");
        }, $scope0_id)
      })
    }), {
      value: 1,
      desc: _.attrTag({
        content: _._content_resume("__tests__/template.marko_2_content", () => {
          const $scope2_id = _._scope_id();
          _._html("Two");
        }, $scope0_id)
      })
    })
  });
  _._serialize_if($scope0_reason, /* input */0) && _._scope($scope0_id, {
    "#childScope/0": _._serialize_if($scope0_reason, /* input */0) && _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
});