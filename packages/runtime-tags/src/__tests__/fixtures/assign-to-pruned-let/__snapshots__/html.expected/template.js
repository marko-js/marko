import * as _2 from "@marko/runtime-tags/debug/html";
export default _2._template("__tests__/template.marko", input => {
  _2._scope_reason();
  const $scope0_id = _2._scope_id();
  let count = 0;
  _2._html(`<button>Before</button>${_2._el_resume($scope0_id, "#button/0")}`);
  _2._script($scope0_id, "__tests__/template.marko_0");
  _2._scope($scope0_id, {}, "__tests__/template.marko", 0);
});