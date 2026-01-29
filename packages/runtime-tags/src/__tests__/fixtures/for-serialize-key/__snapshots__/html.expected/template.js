import * as _2 from "@marko/runtime-tags/debug/html";
export default _2._template("__tests__/template.marko", input => {
  _2._scope_reason();
  const $scope0_id = _2._scope_id();
  _2._html("<div id=el></div><div>");
  _2.forOf(["hello"], (_, index) => {
    const $scope1_id = _2._scope_id();
    _2._html(`<button>Click</button>${_2._el_resume($scope1_id, "#button/0")}`);
    _2._script($scope1_id, "__tests__/template.marko_1");
    _2._scope($scope1_id, {
      "#LoopKey": index
    }, "__tests__/template.marko", "3:4", {
      "#LoopKey": "3:11"
    });
  });
  _2._html("</div>");
});