import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/custom-tag.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  _$.write(`<button class=inc>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.dynamicTag($scope0_id, "#text/2", input.content, [x], 0, 1, 1);
  _$.writeEffect($scope0_id, "__tests__/tags/custom-tag.marko_0_x");
  _$.writeScope($scope0_id, {
    input_content: input.content,
    x
  }, "__tests__/tags/custom-tag.marko", 0, {
    input_content: ["input.content"],
    x: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});