import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/custom-tag.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  let y = 10;
  _$.write(`<button class=inc>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/1")},<!>${_$.escapeXML(y)}${_$.markResumeNode($scope0_id, "#text/2")}</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.dynamicTag($scope0_id, "#text/3", input.content, [x, y], 0, 1, 1);
  _$.writeEffect($scope0_id, "__tests__/tags/custom-tag.marko_0_x_y");
  _$.writeScope($scope0_id, {
    input_content: input.content,
    x,
    y
  }, "__tests__/tags/custom-tag.marko", 0, {
    input_content: ["input.content"],
    x: "1:6",
    y: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
});