import * as _ from "@marko/runtime-tags/debug/html";
import _myFor from "./tags/my-for.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _myFor({
    to: 5,
    content: _._content_resume("__tests__/template.marko_1_content", i => {
      const $scope1_reason = _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html(`${_._escape(i)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* i */0))}`);
      _._serialize_if($scope1_reason, /* i */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:2");
    }, $scope0_id)
  });
});