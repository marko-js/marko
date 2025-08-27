import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/wrapper.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    as: inputAs,
    ...htmlInput
  } = input;
  _$.dynamicTag($scope0_id, "#text/0", inputAs || "div", htmlInput, _$.registerContent("__tests__/tags/wrapper.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write("hi");
  }, $scope0_id), 0, _$.serializeGuard($serialize, /* inputAs,htmlInput */0));
  _$.serializeGuard($serialize, /* inputAs,htmlInput */0) && _$.writeScope($scope0_id, {
    inputAs: _$.serializeIf($serialize, /* input */2) && inputAs,
    htmlInput: _$.serializeIf($serialize, /* input.as */1) && htmlInput
  }, "__tests__/tags/wrapper.marko", 0, {
    inputAs: "1:13",
    htmlInput: "1:25"
  });
});