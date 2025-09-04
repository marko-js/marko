import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let count = 0;
  _._html("<section>");
  _child({});
  _._html(`</section><div>${_._escape(count)}${_._el_resume($scope0_id, "#text/1")}</div>`);
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});