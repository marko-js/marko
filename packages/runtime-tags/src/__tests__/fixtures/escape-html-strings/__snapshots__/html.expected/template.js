import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let count = 1;
  _._html(`<div>${_._escape(count)}${_._el_resume($scope0_id, "#text/0")}\` `);
  _child({});
  _._html("</div>");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});