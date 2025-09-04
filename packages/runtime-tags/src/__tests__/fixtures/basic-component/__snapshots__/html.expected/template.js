import * as _ from "@marko/runtime-tags/debug/html";
import _counter from "./tags/counter.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  _._html("<div>");
  _counter({});
  _._html("</div>");
});