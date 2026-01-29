import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/wrapper.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    as: inputAs,
    ...htmlInput
  } = input;
  _._dynamic_tag($scope0_id, "#text/0", inputAs || "div", htmlInput, _._content_resume("__tests__/tags/wrapper.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html("hi");
  }, $scope0_id), 0, _._serialize_guard($scope0_reason, /* input.as, htmlInput */0));
  _._serialize_if($scope0_reason, /* input.as, htmlInput */0) && _._scope($scope0_id, {
    inputAs: _._serialize_if($scope0_reason, /* htmlInput */2) && inputAs,
    htmlInput: _._serialize_if($scope0_reason, /* input.as */1) && htmlInput
  }, "__tests__/tags/wrapper.marko", 0, {
    inputAs: "1:13",
    htmlInput: "1:25"
  });
});