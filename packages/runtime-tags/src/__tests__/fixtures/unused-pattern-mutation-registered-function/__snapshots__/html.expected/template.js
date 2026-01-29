const identity = fn => fn;
import * as _2 from "@marko/runtime-tags/debug/html";
export default _2._template("__tests__/template.marko", input => {
  _2._scope_reason();
  const $scope0_id = _2._scope_id();
  let value = "initial";
  _2._html(`<button>Click</button>${_2._el_resume($scope0_id, "#button/0")}`);
  _2._script($scope0_id, "__tests__/template.marko_0");
  _2._scope($scope0_id, {}, "__tests__/template.marko", 0);
});