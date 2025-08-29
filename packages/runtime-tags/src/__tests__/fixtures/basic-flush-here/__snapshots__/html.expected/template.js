import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const _ = _$.$global().__flush__ = ($global, html) => `BEFORE-${$global.runtimeId}-${html}-AFTER`;
  _$.write("<h1>Hello World</h1>");
});