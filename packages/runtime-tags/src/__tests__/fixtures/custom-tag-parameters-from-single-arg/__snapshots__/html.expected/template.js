import * as _ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  _customTag({
    content: _._content_resume("__tests__/template.marko_1_content", count => {
      const $scope1_reason = _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html(`<div>Count: ${_._sep(_._serialize_guard($scope1_reason, /* count */0))}${_._escape(count)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* count */0))}</div>`);
      _._serialize_if($scope1_reason, /* count */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:2");
    }, $scope0_id)
  });
});