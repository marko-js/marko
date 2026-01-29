import * as _ from "@marko/runtime-tags/debug/html";
import _hello from "./tags/hello/index.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _hello({
    foo: _.attrTag({
      content: _._content("__tests__/template.marko_1_content", () => {
        _._scope_reason();
        const $scope1_id = _._scope_id();
        _._html("Foo!");
      })
    })
  });
});