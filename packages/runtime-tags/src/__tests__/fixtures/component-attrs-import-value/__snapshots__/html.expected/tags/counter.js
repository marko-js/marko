import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/counter.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count = 0;
  _$.write(`<button>${_$.escapeXML(input.format(count))}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.writeEffect($scope0_id, "__tests__/tags/counter.marko_0_count");
  _$.writeScope($scope0_id, {
    input,
    count
  }, "__tests__/tags/counter.marko", 0, {
    input: 0,
    count: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});