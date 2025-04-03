import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/counter.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  _$.write(`<button class=inc>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  const $return = x;
  _$.writeEffect($scope0_id, "__tests__/tags/counter.marko_0_x");
  _$.writeScope($scope0_id, {
    x,
    "#TagVariableChange": _$.register(_new_x => {
      x = _new_x;
    }, "__tests__/tags/counter.marko_0/valueChange", $scope0_id)
  }, "__tests__/tags/counter.marko", 0, {
    x: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
  return $return;
});