import _counters from "./tags/2counters.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count1 = 0;
  let count2 = 0;
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.count1 */0: /* count1 */1,
    /* input.count2 */2: /* count2 */1
  });
  _counters({
    count1: count1,
    count1Change: _._resume(_new_count1 => {
      count1 = _new_count1;
    }, "__tests__/template.marko_0/count1Change", $scope0_id),
    count2: count2,
    count2Change: _._resume(_new_count2 => {
      count2 = _new_count2;
    }, "__tests__/template.marko_0/count2Change", $scope0_id)
  });
  _._html(`<div>${_._escape(count1)}${_._el_resume($scope0_id, "#text/1")} <!>${_._escape(count2)}${_._el_resume($scope0_id, "#text/2")}</div>`);
  _._scope($scope0_id, {
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});