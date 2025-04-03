import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<div${_$.classAttr(input.foo)}${_$.attr("foo", 'a' + input.foo + 'b')}${_$.attr("bar", `a ${input.bar} b`)}${_$.attr("nested", `a ${input.foo + ` nested ${input.bar}`} b`)}></div>${_$.markResumeNode($scope0_id, "#div/0")}`);
  _$.writeScope($scope0_id, {
    input_foo: input.foo,
    input_bar: input.bar
  }, "__tests__/template.marko", 0, {
    input_foo: ["input.foo"],
    input_bar: ["input.bar"]
  });
});