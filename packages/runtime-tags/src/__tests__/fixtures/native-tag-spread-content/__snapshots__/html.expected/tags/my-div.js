import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/my-div.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("<div");
  _$.writeAttrsAndContent(input, "#div/0", $scope0_id, "div");
  _$.write(`</div>${_$.markResumeNode($scope0_id, "#div/0")}<button`);
  _$.writeAttrsAndContent({
    foo: 1,
    ...input
  }, "#button/1", $scope0_id, "button");
  _$.write(`</button>${_$.markResumeNode($scope0_id, "#button/1")}<span${_$.attrs(input, "#span/2", $scope0_id, "span")}>Overridden</span>${_$.markResumeNode($scope0_id, "#span/2")}<output${_$.attrs(input, "#output/3", $scope0_id, "output")}>`);
  _$.writeContent(undefined);
  _$.write(`</output>${_$.markResumeNode($scope0_id, "#output/3")}`);
  const CustomContent = {
    content: _$.registerContent("__tests__/tags/my-div.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      _$.write("Custom content");
    }, $scope0_id)
  };
  _$.write(`<strong${_$.attrs(input, "#strong/4", $scope0_id, "strong")}>`);
  _$.writeContent(CustomContent.content);
  _$.write(`</strong>${_$.markResumeNode($scope0_id, "#strong/4")}<p`);
  _$.writeAttrsAndContent({
    content: CustomContent.content,
    ...input
  }, "#p/5", $scope0_id, "p");
  _$.write(`</p>${_$.markResumeNode($scope0_id, "#p/5")}<em>`);
  _$.writeContent(CustomContent);
  _$.write("</em>");
  _$.writeEffect($scope0_id, "__tests__/tags/my-div.marko_0_input_CustomContent_content");
  _$.writeEffect($scope0_id, "__tests__/tags/my-div.marko_0_input");
  _$.writeScope($scope0_id, {
    input,
    CustomContent_content: CustomContent?.content
  }, "__tests__/tags/my-div.marko", 0, {
    input: 0,
    CustomContent_content: ["CustomContent.content", "10:8"]
  });
});