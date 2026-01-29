import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/my-tag.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    as: inputAs,
    class: inputClass,
    content: inputContent,
    ...htmlInput
  } = input;
  const startContent = {
    content: _._content("__tests__/tags/my-tag.marko_1_content", () => {
      const $scope1_id = _._scope_id();
      _._scope_reason();
      _._html("default");
    })
  };
  let content = startContent;
  _._dynamic_tag($scope0_id, "#text/0", inputAs || "div", {
    ...htmlInput,
    class: ["foo", inputClass],
    content: content
  });
  _._script($scope0_id, "__tests__/tags/my-tag.marko_0_inputContent");
  _._scope($scope0_id, {
    inputAs,
    inputClass,
    inputContent,
    htmlInput,
    content: _._serialize_if($scope0_reason, /* input.as, input.class, htmlInput */0) && content
  }, "__tests__/tags/my-tag.marko", 0, {
    inputAs: "1:13",
    inputClass: "1:29",
    inputContent: "1:50",
    htmlInput: "1:67",
    content: "6:5"
  });
  _._resume_branch($scope0_id);
});