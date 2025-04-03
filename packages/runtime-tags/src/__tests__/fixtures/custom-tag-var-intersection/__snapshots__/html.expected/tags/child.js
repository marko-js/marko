import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 0;
  _$.write(`<button class=inc>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  const $return = x + input.extra;
  _$.writeEffect($scope0_id, "__tests__/tags/child.marko_0_x");
  _$.writeScope($scope0_id, {
    input_extra: input.extra,
    x
  }, "__tests__/tags/child.marko", 0, {
    input_extra: ["input.extra"],
    x: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
  return $return;
});