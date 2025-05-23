import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/components/tags-layout.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count = 0;
  _$.write(`<button id=tags>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}<div>`);
  _$.dynamicTag($scope0_id, "#text/2", input.content, [count, "hello"], 0, 1);
  _$.write("</div>");
  _$.writeEffect($scope0_id, "__tests__/components/tags-layout.marko_0_count");
  _$.writeScope($scope0_id, {
    input_content: input.content,
    count
  }, "__tests__/components/tags-layout.marko", 0, {
    input_content: ["input.content"],
    count: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});