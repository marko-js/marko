import * as _ from "@marko/runtime-tags/debug/html";
import _wrap from "./tags/wrap.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  _wrap({
    option: _.attrTag({
      content: _._content_resume("__tests__/template.marko_1_content", () => {
        const $scope1_id = _._scope_id();
        _._html("1");
      }, $scope0_id)
    })
  });
});