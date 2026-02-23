import * as _2 from "@marko/runtime-tags/debug/html";
export default _2._template("__tests__/template.marko", input => {
  _2._scope_reason();
  const $scope0_id = _2._scope_id();
  const _ = _2.$global().__flush__ = ($global, html) => `BEFORE-${$global.runtimeId}-${html}-AFTER`;
  _2._html("<h1>Hello World</h1>");
});