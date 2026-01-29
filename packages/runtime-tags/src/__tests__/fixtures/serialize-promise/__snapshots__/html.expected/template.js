import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const promise = Promise.resolve("hello");
  _._html("<div id=ref>0</div>");
  _._script($scope0_id, "__tests__/template.marko_0_promise");
  _._scope($scope0_id, {
    promise
  }, "__tests__/template.marko", 0, {
    promise: "1:8"
  });
});