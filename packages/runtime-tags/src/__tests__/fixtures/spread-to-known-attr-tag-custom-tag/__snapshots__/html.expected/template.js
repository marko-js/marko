import * as _ from "@marko/runtime-tags/debug/html";
import _wrap from "./tags/wrap.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _wrap({
    class: "foo",
    option: _.attrTags(_.attrTags(_.attrTag({
      value: 1,
      content: _._content_resume("__tests__/template.marko_1_content", () => {
        _._scope_reason();
        const $scope1_id = _._scope_id();
        _._html("One");
      }, $scope0_id)
    }), {
      value: 2,
      content: _._content_resume("__tests__/template.marko_2_content", () => {
        _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html("Two");
      }, $scope0_id)
    }), {
      value: 3,
      content: _._content_resume("__tests__/template.marko_3_content", () => {
        _._scope_reason();
        const $scope3_id = _._scope_id();
        _._html("Three");
      }, $scope0_id)
    })
  });
});