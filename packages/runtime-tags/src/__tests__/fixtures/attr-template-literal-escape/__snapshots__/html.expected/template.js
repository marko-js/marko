import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<div${_$.attr("foo", `Hello ${input.name}`)}></div>${_$.markResumeNode($scope0_id, "#div/0", _$.serializeGuard($serialize, /* input.name */0))}`);
  _$.serializeGuard($serialize, /* input.name */0) && _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});