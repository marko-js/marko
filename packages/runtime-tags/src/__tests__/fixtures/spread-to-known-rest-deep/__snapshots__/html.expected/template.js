import _wrapOuter from "./tags/wrap-outer.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _wrapOuter({
    class: "foo"
  });
});