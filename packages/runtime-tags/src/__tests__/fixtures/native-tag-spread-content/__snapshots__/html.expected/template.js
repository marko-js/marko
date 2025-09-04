import * as _ from "@marko/runtime-tags/debug/html";
import _myDiv from "./tags/my-div.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  _myDiv({
    content: _._content_resume("__tests__/template.marko_1_content", () => {
      const $scope1_id = _._scope_id();
      _._html("Hello");
    }, $scope0_id)
  });
});