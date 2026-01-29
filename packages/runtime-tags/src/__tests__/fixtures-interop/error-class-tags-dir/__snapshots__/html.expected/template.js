import _hello from "./tags/hello.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._dynamic_tag($scope0_id, "#text/0", _hello, {}, 0, 0, 0);
});