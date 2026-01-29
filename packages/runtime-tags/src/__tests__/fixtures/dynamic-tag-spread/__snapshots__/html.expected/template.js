import * as _ from "@marko/runtime-tags/debug/html";
import _wrapper from "./tags/wrapper.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("<div>");
  _wrapper({
    id: "foo"
  });
  _._html("</div><div>");
  _wrapper({
    ...{
      id: "foo"
    },
    foo: "bar"
  });
  _._html("</div>");
});