import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/my-div.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("<div");
  _._attrs_content(input, "#div/0", $scope0_id, "div");
  _._html(`</div>${_._el_resume($scope0_id, "#div/0")}<button`);
  _._attrs_content({
    foo: 1,
    ...input
  }, "#button/1", $scope0_id, "button");
  _._html(`</button>${_._el_resume($scope0_id, "#button/1")}<span${_._attrs(input, "#span/2", $scope0_id, "span")}>Overridden</span>${_._el_resume($scope0_id, "#span/2")}<output${_._attrs(input, "#output/3", $scope0_id, "output")}>`);
  _._attr_content("#output/3", $scope0_id, undefined);
  _._html(`</output>${_._el_resume($scope0_id, "#output/3")}`);
  const CustomContent = {
    content: _._content_resume("__tests__/tags/my-div.marko_1_content", () => {
      const $scope1_id = _._scope_id();
      _._scope_reason();
      _._html("Custom content");
    }, $scope0_id)
  };
  _._html(`<strong${_._attrs(input, "#strong/4", $scope0_id, "strong")}>`);
  _._attr_content("#strong/4", $scope0_id, CustomContent.content);
  _._html(`</strong>${_._el_resume($scope0_id, "#strong/4")}<p`);
  _._attrs_content({
    content: CustomContent.content,
    ...input
  }, "#p/5", $scope0_id, "p");
  _._html(`</p>${_._el_resume($scope0_id, "#p/5")}<em>`);
  _._attr_content("#em/6", $scope0_id, CustomContent, 0);
  _._html("</em>");
  _._script($scope0_id, "__tests__/tags/my-div.marko_0_input_CustomContent_content");
  _._script($scope0_id, "__tests__/tags/my-div.marko_0_input");
  _._scope($scope0_id, {
    input,
    CustomContent_content: CustomContent?.content
  }, "__tests__/tags/my-div.marko", 0, {
    input: 0,
    CustomContent_content: ["CustomContent.content", "10:8"]
  });
});