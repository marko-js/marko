import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/counter.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = 1;
  _._html(`<button class=inc>${_._escape(x)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  const $return = x;
  _._script($scope0_id, "__tests__/tags/counter.marko_0_x");
  _._scope($scope0_id, {
    x,
    "#TagVariableChange": _._resume(_new_x => {
      x = _new_x;
    }, "__tests__/tags/counter.marko_0/valueChange", $scope0_id) || void 0
  }, "__tests__/tags/counter.marko", 0, {
    x: "1:6"
  });
  _._resume_branch($scope0_id);
  return $return;
});