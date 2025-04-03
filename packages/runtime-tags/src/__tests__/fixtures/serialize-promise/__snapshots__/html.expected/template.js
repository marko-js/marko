import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const promise = Promise.resolve("hello");
  _$.write("<div id=ref>0</div>");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_promise");
  _$.writeScope($scope0_id, {
    promise
  }, "__tests__/template.marko", 0, {
    promise: "1:8"
  });
});