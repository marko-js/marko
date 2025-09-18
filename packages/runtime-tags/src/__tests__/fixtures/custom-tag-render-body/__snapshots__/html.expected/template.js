import _child from "./tags/child/index.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  _child({
    name: "World",
    content: _._content("__tests__/template.marko_1_content", () => {
      const $scope1_id = _._scope_id();
      _._html("This is the body content");
    })
  });
});