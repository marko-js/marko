const div = "span";
const foo = "div";
const Bar = "div";
import * as _ from "@marko/runtime-tags/debug/html";
import _foo from "./tags/foo.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("<div></div>");
  _foo({});
  _._dynamic_tag($scope0_id, "#text/1", Bar, {}, 0, 0, 0);
});