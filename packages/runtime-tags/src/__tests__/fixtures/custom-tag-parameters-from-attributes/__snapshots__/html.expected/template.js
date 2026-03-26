import * as _ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _customTag({
    name: "hello",
    content: _._content_resume("__tests__/template.marko_1_content", ({
      count,
      name
    }) => {
      const $scope1_reason = _._scope_reason(),
        $sg__name = _._serialize_guard($scope1_reason, /* name */2),
        $sg__count = _._serialize_guard($scope1_reason, /* count */1);
      const $scope1_id = _._scope_id();
      _._html(`<div>Count (${_._sep(($sg__name))}${_._escape(name)}${_._el_resume($scope1_id, "#text/0", ($sg__name))}): ${_._sep(($sg__count))}${_._escape(count)}${_._el_resume($scope1_id, "#text/1", ($sg__count))}</div>`);
      (_._serialize_if($scope1_reason, /* count, name */0)) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:2");
    }, $scope0_id)
  });
}, 1);