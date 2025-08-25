import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/my-tag.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    as: inputAs,
    class: inputClass,
    content: inputContent,
    ...htmlInput
  } = input;
  const startContent = {
    content: _$.createContent("__tests__/tags/my-tag.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      _$.write("default");
    })
  };
  let content = startContent;
  _$.dynamicTag($scope0_id, "#text/0", inputAs || "div", {
    ...htmlInput,
    class: ["foo", inputClass],
    content: content
  });
  _$.writeEffect($scope0_id, "__tests__/tags/my-tag.marko_0_inputContent");
  _$.writeScope($scope0_id, {
    inputAs,
    inputClass,
    inputContent,
    htmlInput,
    content: _$.serializeIf($serialize, /* input.as, input.class, input */3) && content
  }, "__tests__/tags/my-tag.marko", 0, {
    inputAs: "1:13",
    inputClass: "1:29",
    inputContent: "1:50",
    htmlInput: "1:67",
    content: "6:5"
  });
  _$.resumeClosestBranch($scope0_id);
});