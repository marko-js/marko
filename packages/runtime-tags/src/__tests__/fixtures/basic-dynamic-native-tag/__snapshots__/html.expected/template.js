import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  const {
    tagName
  } = input;
  _._dynamic_tag($scope0_id, "#text/0", tagName, {
    class: ["a", "b"]
  }, _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._html("Hello World");
  }, $scope0_id), 0, _._serialize_guard($serialize, /* tagName */0));
  _._serialize_guard($serialize, /* tagName */0) && _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});