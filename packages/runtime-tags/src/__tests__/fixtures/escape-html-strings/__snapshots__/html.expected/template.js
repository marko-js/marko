const count = 1;
import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  _._html(`<div>${_._escape(count)}\` `);
  _child({});
  _._html("</div>");
});